import { todoPokemon } from "../services/api";
import { cleanPage } from "../utils/cleanPage";
import { printCharacters } from "./pokePage";



export const filtrType = (a) => {
    console.log(a);
    console.log(todoPokemon);
    let typeSelect = []
    todoPokemon.forEach(element => {
        if (a == element.types[0].type.name) {
            typeSelect.push(element)
        }
        
    });
    
     printCharacters(typeSelect)
}
