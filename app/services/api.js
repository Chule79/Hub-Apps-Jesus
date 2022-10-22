import { dataSafe } from "../main";






export const getData = async () => {
    try {
        const takeData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        const transData = await takeData.json()
        return transData
       
    } catch (error) {
        console.log(error);
    }
}


export let todoPokemon = []

 export const dataPoke = (list) => {

     list.forEach((pokemon) => {
        
        const takePokemon = async (pokemon) => {
            try{
                const dataPokemon = await fetch(pokemon.url)
                const transPokemon = await dataPokemon.json()
                todoPokemon.push(transPokemon )
                return transPokemon}
            catch (error) {
                console.log(error);
            }
            
        }
        takePokemon(pokemon)
        
        
    });
    
    
}

//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------

export const getTypes = async () => {
    try {
        const takeData = await fetch("https://pokeapi.co/api/v2/type/")
        const transData = await takeData.json()
        return transData
       
    } catch (error) {
        console.log(error);
    }
}

//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------


export const getPreguntas = async () => {
    try {
        const takeData = await fetch("https://hub-service.onrender.com/preguntas")
        const transData = await takeData.json()
        return transData
    } catch (error) {
        console.log(error);
    }
}