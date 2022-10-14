import { hubGames } from "../components/hubJuegos/hub"
import { cleanPage } from "../utils/cleanPage"

export const getGames = () => {
    const app = document.querySelector("#app")
    const user = localStorage.getItem(`nickName`)
    cleanPage(app)
    app.innerHTML = hubGames(user)
} 