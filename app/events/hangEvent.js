import { hangPage } from "../pages/hangPage"


export let indice = 0

export const hangEvent = () => {
   
    const app = document.querySelector("#app")
    const btnCont = document.querySelector("#comprobarLetra")
    btnCont.addEventListener("click", () => {
        indice += 1 
        console.log(indice);
        hangPage()
    })
}
