import { naviHome } from "../components/nav/nav";
import { getGames } from "../pages/hubGames";

export const initUsuario = () => {
    const btnInit = document.querySelector("#btnIniciar")

    btnInit.addEventListener("click", () => {    
        const dtUser = document.querySelector("#nickname").value
        if (dtUser === undefined || dtUser === "") {
            alert("¡Hola..., Debes de meter tu NickName!");
            
        } else {
            localStorage.setItem(`nickName`, `${dtUser}`);
            getGames()
        }
    } )
}

