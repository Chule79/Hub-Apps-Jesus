import { hubGames } from "../components/hubJuegos/hub"
import { naviHome } from "../components/nav/nav"
import { eventCharacter } from "../events/character"
import { addEvents } from "../events/hubEventos"
import { dataSafe } from "../main"
import { dataPoke, } from "../services/api"
import { cleanPage } from "../utils/cleanPage"

export const getGames = () => {
    const app = document.querySelector("#app")
    const user = localStorage.getItem(`nickName`)
    cleanPage(app)
    app.innerHTML = hubGames(user)
    addEvents()  
    dataPoke(dataSafe) 
    
} 
    
   

