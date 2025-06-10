--
-- PostgreSQL database dump
--

-- Dumped from database version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)
-- Dumped by pg_dump version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying NOT NULL,
    is_active boolean,
    dist numeric,
    no_of_planets integer
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_index_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_index_seq OWNER TO freecodecamp;

--
-- Name: galaxy_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_index_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying NOT NULL,
    has_water boolean,
    planet_id integer,
    dist numeric
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_index_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_index_seq OWNER TO freecodecamp;

--
-- Name: moon_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_index_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying NOT NULL,
    earth_mass numeric,
    star_id integer,
    has_water boolean,
    msg text
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_index_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_index_seq OWNER TO freecodecamp;

--
-- Name: planet_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_index_seq OWNED BY public.planet.planet_id;


--
-- Name: satellite; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.satellite (
    satellite_id integer NOT NULL,
    name character varying NOT NULL,
    is_human boolean
);


ALTER TABLE public.satellite OWNER TO freecodecamp;

--
-- Name: satellite_satellid_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.satellite_satellid_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.satellite_satellid_id_seq OWNER TO freecodecamp;

--
-- Name: satellite_satellid_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.satellite_satellid_id_seq OWNED BY public.satellite.satellite_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying NOT NULL,
    temp integer,
    mass integer,
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_index_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_index_seq OWNER TO freecodecamp;

--
-- Name: star_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_index_seq OWNED BY public.star.star_id;


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_index_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_index_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_index_seq'::regclass);


--
-- Name: satellite satellite_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.satellite ALTER COLUMN satellite_id SET DEFAULT nextval('public.satellite_satellid_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_index_seq'::regclass);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'milky way', true, NULL, NULL);
INSERT INTO public.galaxy VALUES (2, 'sombrero', true, NULL, NULL);
INSERT INTO public.galaxy VALUES (3, 'ambromeda', false, NULL, NULL);
INSERT INTO public.galaxy VALUES (4, 'triangulam', true, NULL, NULL);
INSERT INTO public.galaxy VALUES (5, 'whirlpool', false, NULL, NULL);
INSERT INTO public.galaxy VALUES (6, 'messier', false, NULL, NULL);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'moon', true, 1, NULL);
INSERT INTO public.moon VALUES (2, 'Europa', false, 3, NULL);
INSERT INTO public.moon VALUES (3, 'titan', false, 3, NULL);
INSERT INTO public.moon VALUES (4, 'Io', false, 5, NULL);
INSERT INTO public.moon VALUES (5, 'Phomos', true, 5, NULL);
INSERT INTO public.moon VALUES (6, 'Ganymede', true, 5, NULL);
INSERT INTO public.moon VALUES (7, 'Callisto', true, 5, NULL);
INSERT INTO public.moon VALUES (8, 'Dimus', true, 6, NULL);
INSERT INTO public.moon VALUES (9, 'Enceladus', true, 6, NULL);
INSERT INTO public.moon VALUES (10, 'Mimas', false, 6, NULL);
INSERT INTO public.moon VALUES (11, 'Rhea', false, 6, NULL);
INSERT INTO public.moon VALUES (12, 'Iapetus', false, 6, NULL);
INSERT INTO public.moon VALUES (13, 'Dione', false, 6, NULL);
INSERT INTO public.moon VALUES (14, 'Tethys', false, 6, NULL);
INSERT INTO public.moon VALUES (15, 'Miranda', false, 7, NULL);
INSERT INTO public.moon VALUES (16, 'Ariel', false, 7, NULL);
INSERT INTO public.moon VALUES (17, 'Umbriel', false, 7, NULL);
INSERT INTO public.moon VALUES (18, 'Titania', false, 7, NULL);
INSERT INTO public.moon VALUES (19, 'Oberon', false, 7, NULL);
INSERT INTO public.moon VALUES (20, 'Triton', true, 8, NULL);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'earth', 1.00, 1, NULL, NULL);
INSERT INTO public.planet VALUES (2, 'jupiter', 3.52, 2, NULL, NULL);
INSERT INTO public.planet VALUES (3, 'Uranus', 2.24, 1, NULL, NULL);
INSERT INTO public.planet VALUES (4, 'Mars', 1, 1, NULL, NULL);
INSERT INTO public.planet VALUES (5, 'Saturn', 3, 1, NULL, NULL);
INSERT INTO public.planet VALUES (6, 'Mercury', 9, 1, NULL, NULL);
INSERT INTO public.planet VALUES (7, 'venus', 14, 1, NULL, NULL);
INSERT INTO public.planet VALUES (8, 'Neptune', 17, 1, NULL, NULL);
INSERT INTO public.planet VALUES (9, 'Proxima b', 1, 3, NULL, NULL);
INSERT INTO public.planet VALUES (10, 'Kepler-22b', NULL, 2, NULL, NULL);
INSERT INTO public.planet VALUES (11, 'Gliese 581g', NULL, 2, NULL, NULL);
INSERT INTO public.planet VALUES (12, 'HD 209458 b', 6, 3, NULL, NULL);


--
-- Data for Name: satellite; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.satellite VALUES (1, 'Phobos', true);
INSERT INTO public.satellite VALUES (2, 'phobos', false);
INSERT INTO public.satellite VALUES (3, 'daymus', false);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'sun', 5778, 1, 1);
INSERT INTO public.star VALUES (2, 'sirius', 2458, 2, 2);
INSERT INTO public.star VALUES (3, 'vega', 3467, 4, 1);
INSERT INTO public.star VALUES (4, 'rigel', 5234, 3, 2);
INSERT INTO public.star VALUES (5, 'polaris', 2345, 3, 5);
INSERT INTO public.star VALUES (6, 'denmus', 1235, 2, 6);


--
-- Name: galaxy_index_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_index_seq', 1, false);


--
-- Name: moon_index_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_index_seq', 1, false);


--
-- Name: planet_index_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_index_seq', 1, false);


--
-- Name: satellite_satellid_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.satellite_satellid_id_seq', 1, false);


--
-- Name: star_index_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_index_seq', 1, false);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_name_key1; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key1 UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: satellite satellite_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.satellite
    ADD CONSTRAINT satellite_name_key UNIQUE (name);


--
-- Name: satellite satellite_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.satellite
    ADD CONSTRAINT satellite_pkey PRIMARY KEY (satellite_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: star fk; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT fk FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- PostgreSQL database dump complete
--

