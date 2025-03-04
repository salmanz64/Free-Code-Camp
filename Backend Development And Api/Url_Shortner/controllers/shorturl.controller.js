const Url = require('../models/url.model.js');
const express = require("express");
const dns = require("dns").promises; // Use promises API

const CreateUrl = async (req, res) => {
    let org_url = req.body["url"];

    try {
        let hostname = new URL(org_url).hostname;
        await dns.lookup(hostname); // Validate the domain
    } catch (e) {
        return res.json({ "error": "invalid url" }); // Stop execution
    }

    try {
        let count = await Url.countDocuments();

        const url = await Url.create({
            org_url: org_url,
            short_url: count + 1
        });

        res.json({ "original_url": org_url, "short_url": url.short_url });

    } catch (e) {
        res.json({ "error": "Database error while creating short URL" });
    }
};

const GetUrl = async (req, res) => {
    const { url } = req.params;

    try {
        const short_url = await Url.findOne({ short_url: url });

        if (!short_url) {
            return res.json({ "error": "No short URL found for the given input" });
        }

        res.redirect(short_url.org_url);
    } catch (e) {
        res.json({ "error": "An error occurred while fetching the URL" });
    }
};

module.exports = {
    CreateUrl,
    GetUrl
};
