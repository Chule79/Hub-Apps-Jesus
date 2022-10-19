import { getGames } from "../pages/hubGames"
import { randomColor } from "../utils/colores"


export const changeColor = () => {
   const btnColores = document.getElementById("btnColor") 
   btnColores.addEventListener("click", () =>{
      randomColor()
    
   })  
}




export const home = () => {
   const btnhome = document.getElementById("btnhome") 
   btnhome.addEventListener("click", () =>{
      getGames()
   })
}