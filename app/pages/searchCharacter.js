import { printCharacters } from "./pokePage";

export const searchCharacter = (data, valor) =>{
    let resultados = []
    data.forEach(element => {
       let poke = element.name.toUpperCase()
       console.log(poke);
       
        if (poke.includes(valor)) {
            resultados.push(element)
            
        }
    });
    printCharacters(resultados)
}