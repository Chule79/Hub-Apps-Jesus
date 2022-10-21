import { searchCharacter } from "../pages/searchCharacter";
import { todoPokemon } from "../services/api";
import { cleanPage } from "../utils/cleanPage";

export const pokeSearch = () =>{
    
    const valueSearch = document.querySelector("#searchInput")
    valueSearch.addEventListener("input", () =>{
        const valueSearch = document.querySelector("#searchInput").value  
        const nameSearch = valueSearch.toUpperCase() 
        let valorBusca = nameSearch;
        const data = todoPokemon 
        const tabla = document.querySelector("#tablon")
        cleanPage(tabla)
        searchCharacter(data, valorBusca);
    })
}
