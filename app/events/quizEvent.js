import { correctAnswer, errorAnswer } from "../components/quiz/quiz";
import { todasPreguntas } from "../main";
import { quizPage } from "../pages/quizPage";
import { cleanPage } from "../utils/cleanPage";


export let contador = 0


export const quizEvent = () => {
    const arrayP = todasPreguntas;
    const app = document.querySelector("#app")
    const btnCont = document.querySelector("#preBtn")
    btnCont.addEventListener("click", () => {
        contador += 1 
        quizPage()
    })
}



export const comprobarPre = () => {
    const posiblesRes = document.querySelectorAll("#selectRespons")
    
    posiblesRes.forEach((elemnt) => {
        console.log(elemnt);
        elemnt.addEventListener("click", (eleg) => {
        const elegida = eleg.target.dataset.res;
        if (elegida == todasPreguntas[`${contador}`].correct) {
            const app = document.querySelector("#app")
            cleanPage(app)
            app.innerHTML = correctAnswer()
            quizEvent()
        } else {
            const app = document.querySelector("#app")
            cleanPage(app)
            app.innerHTML = errorAnswer()
            quizErrorEvent()
        }
        
    })
    })
}



export const quizErrorEvent = () => {
    const app = document.querySelector("#app")
    const btnCont = document.querySelector("#erroBtn")
    btnCont.addEventListener("click", () => {
        quizPage()
    })
}