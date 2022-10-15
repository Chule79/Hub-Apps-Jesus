import { constrPokemon, typePokemon } from "../components/pokemons/pokemons";
import { getTypes } from "../services/api"



export const pokeType = async () => {
    const characters = await getTypes();    
    printCharacters(characters.results);

}

export const printCharacters = (list) => {
   
    const pokeTipo = document.querySelector("#pokeTipo")
    list.forEach((character) => { 
        
        console.log(character);
        pokeTipo.innerHTML += typePokemon(character)
    });
    
  };





export const pokePage = () => {
    const pokeMap = pokeList.map((selPokemon) => {
        return {

        }
    })
}

