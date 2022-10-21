import { pokeCromo } from "../components/pokeCromo/pokeCromo";
import { pokeHero } from "../components/pokeHero/pokeHero";
import { constrPokemon, regionPokemon, typePokemon } from "../components/pokeNav/pokeNav";
import { pokeTablon } from "../components/pokeTablon/pokeTablon";
import { eventCharacter } from "../events/character";
import { pokeSearch } from "../events/searchEvent";
import { typeEvent } from "../events/selectTypes";
import {getTypes, todoPokemon} from "../services/api"
import { cleanPage } from "../utils/cleanPage";
import { searchCharacter } from "./searchCharacter";



export const pokeType = async () => {
    const app = document.querySelector("#app")
    const types = await getTypes();    
    printTypes(types.results);
    app.innerHTML += pokeHero()
    app.innerHTML += pokeTablon()
    printCharacters(todoPokemon)
    pokeSearch()
    typeEvent()
}



export const printCharacters = (list) => {
    const tabla = document.querySelector("#tablon")
     cleanPage(tabla)
    
    list.forEach((pok) => { 
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








