import { todasPreguntas } from "../main";


let contador = 0


export const quizEvent = () => {
    const arrayP = todasPreguntas;
    const app = document.querySelector("#app")
    const btnCont = document.querySelector("#preBtn")
    btnCont.addEventListener("click", () => {
        contador += 1 
        console.log(arrayP[`${contador}`]);
    })
}
