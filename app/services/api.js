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




 export const dataPoke = (list) => {

     list.forEach((pokemon) => {
        
        const takePokemon = async (pokemon) => {
            try{
                const dataPokemon = await fetch(pokemon.url)
                const transPokemon = await dataPokemon.json()
                return transPokemon}
            catch (error) {
                console.log(error);
            }

        }
       
        console.log( takePokemon(pokemon));   
    });
    

}


export const getTypes = async () => {
    try {
        const takeData = await fetch("https://pokeapi.co/api/v2/type/")
        const transData = await takeData.json()
        return transData
       
    } catch (error) {
        console.log(error);
    }
}