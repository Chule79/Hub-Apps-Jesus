import { hubGames } from "../components/hubJuegos/hub"
import { getGames } from "../pages/hubGames"
import { cleanPage } from "../utils/cleanPage"
import { randomColor } from "../utils/colores"
import { addEvents } from "./hubEventos"


export const changeColor = () => {
   const btnColores = document.getElementById("btnColor") 
   btnColores.addEventListener("click", () =>{
      randomColor()
    
   })  
}




export const home = () => {
   const btnhome = document.getElementById("btnhome") 
   btnhome.addEventListener("click", () =>{
      const app = document.querySelector("#app")
      const user = localStorage.getItem(`nickName`)
      cleanPage(app)
      app.innerHTML = hubGames(user)
      addEvents()  
   })
}
