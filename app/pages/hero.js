import { insertPokeImg, insertPokeInf, pokeHero } from "../components/pokeHero/pokeHero";
import { eventCharacter } from "../events/character";
import { todoPokemon } from "../services/api";
import { cleanPage } from "../utils/cleanPage";


export const getSelectCharacter =  (array, seleccionado) => {
    const pokeInf = document.querySelector("#pokeInf")
    cleanPage(pokeInf)
    const pokeImg = document.querySelector("#pokeImg")
    cleanPage(pokeImg)
    console.log(seleccionado)
    console.log(array)

    let statsSelec = []
    let typeSelec = []

    for (const pokemon of array) {
        if (pokemon.id === seleccionado){

          const  sacarStats = pokemon.stats.forEach(stat => {
                statsSelec.push(stat)
            });

            const  sacarTyps = pokemon.types.forEach(typ => {
                typeSelec.push(typ)
            });
            console.log(statsSelec);
            printSelectCharacters(pokemon, statsSelec, typeSelec)
        }
    };
}


const printSelectCharacters =  (a, b, c) => {
    const pokeInf = document.querySelector("#pokeInf")
    const pokeImg = document.querySelector("#pokeImg")
    console.log(b);
    pokeInf.innerHTML += insertPokeInf(a, b, c)
    pokeImg.innerHTML += insertPokeImg(a)
    
    
};

