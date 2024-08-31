const details = document.getElementById("bio");
const inputbtn = document.getElementById("search-input");
const btn = document.getElementById("search-button");


const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const sp_attack = document.getElementById("special-attack");
const sp_defense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const height = document.getElementById("height");
const weight = document.getElementById("weight");
const types = document.getElementById("types");
const pname = document.getElementById("pokemon-name");
const pid = document.getElementById("pokemon-id");


let found = false;


const fetching = ()=>{
    found = false;
    fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon").then((res)=>res.json()).then((data)=>{
        
        let pokemons = data.results;
        findPokemon(pokemons);
    })
    
}

btn.addEventListener("click",fetching);




const findPokemon = (pokemons)=>{
    
    pokemons.forEach((pokemon)=>{
        let pokemon_id = pokemon.id;
        let pokemon_name = pokemon.name;
        if(pokemon_id==inputbtn.value || pokemon_name==(inputbtn.value).toLowerCase()){
            found = true;
            fecthMoreDetails(pokemon);
            return
        }
        
    }

)
if(!found){
    alert("Pokémon not found")
}
}

const fecthMoreDetails = (pokemongt)=>{
    
    fetch(pokemongt.url).then((res)=>res.json()).then((data)=>{
        let pokemonMoreData= data;
        displayPokemon(pokemonMoreData)
        return
    })
    
     
}
const displayPokemon=(pokemon)=>{
    clearDisplay();
    const pokemonStats = pokemon.stats;
    
    const HTMLSTRING = 
    `
    <img src = "${pokemon["sprites"].front_default}" width="150" height= "150" id="sprite">
    `

    pname.innerText=pokemon.name;
    pid.innerText=`#${pokemon.id}`;
    weight.innerText=pokemon.weight;
    height.innerText=pokemon.height;
    
    let typesLength = pokemon.types.length;
    for(let i=0; i<typesLength; i++){

    let typeDiv = types.appendChild(document.createElement('div'));
    typeDiv.innerText = (pokemon.types[i].type.name).toUpperCase();
    typeDiv.classList.add("card");
    typeDiv.style.display="inline"
    }
  
    height.insertAdjacentHTML('afterend',HTMLSTRING);

     hp.innerText = pokemonStats[0].base_stat;
     attack.innerText = pokemonStats[1].base_stat;
     defense.innerText = pokemonStats[2].base_stat;
     sp_attack.innerText = pokemonStats[3].base_stat;
     sp_defense.innerText = pokemonStats[4].base_stat;
     speed.innerText = pokemonStats[5].base_stat;

}
const clearDisplay = () => {
    inputbtn.value = "";
    pname.innerText = '';
    pid.innerText = '';
    weight.innerText = '';
    height.innerText = '';
    types.innerText = '';
   
    const sprite = document.getElementById('sprite');
    if (sprite) sprite.remove();

    hp.innerText = '';
    attack.innerText = '';
    defense.innerText = '';
    sp_attack.innerText = '';
    sp_defense.innerText = '';
    speed.innerText = '';
};