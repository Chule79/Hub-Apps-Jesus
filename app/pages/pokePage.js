import { pokeCromo } from "../components/pokeCromo/pokeCromo";
import { pokeHero } from "../components/pokeHero/pokeHero";
import { constrPokemon, regionPokemon, typePokemon } from "../components/pokeNav/pokeNav";
import { pokeTablon } from "../components/pokeTablon/pokeTablon";
import { eventCharacter } from "../events/character";
import { pokeSearch } from "../events/searchEvent";
import {getTypes, todoPokemon} from "../services/api"
import { searchCharacter } from "./searchCharacter";



export const pokeType = async () => {
    const app = document.querySelector("#app")
    const types = await getTypes();    
    printTypes(types.results);
    app.innerHTML += pokeHero()
    app.innerHTML += pokeTablon()
    printCharacters(todoPokemon)
    
    pokeSearch()
}



export const printCharacters = (list) => {
   
    const tabla = document.querySelector("#tablon")
    list.forEach((pok) => { 
        console.log(pok);
        tabla.innerHTML += pokeCromo(pok)
    });
    eventCharacter()
};


export const printTypes = (list) => {
   
    const pokeTipo = document.querySelector("#pokeTipo")
    list.forEach((type) => { 
        pokeTipo.innerHTML += typePokemon(type)
    });
};








/*
export const pokeReg = async () => {
    const Regions = await getRegions();    
    printRegions(Regions.results);

}

export const printRegions = (list) => {
   
    const pokeRegion = document.querySelector("#pokeRegion")
    list.forEach((region) => { 
        pokeRegion.innerHTML += regionPokemon(region)
    });
    
};


*/
