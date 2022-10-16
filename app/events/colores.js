import { randomColor } from "../utils/colores"


export const changeColor = () => {
   const btnColores = document.querySelector("#btnColor") 
   btnColores.addEventListener("click", () =>{
      randomColor()
    
   })  
}