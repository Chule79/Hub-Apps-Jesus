
import { constrQuiz } from "../components/quiz/quiz"
import { eventQuiz } from "../events/hubEventos"
import { comprobarPre, contador } from "../events/quizEvent"
import { todasPreguntas } from "../main"
import { cleanPage } from "../utils/cleanPage"

export const quizPage = () => {
    const user = localStorage.getItem(`nickName`)
    const disparaPreg = todasPreguntas[`${contador}`]
    const app = document.querySelector("#app")
    const respuestas = [ disparaPreg.correct, ...disparaPreg.incorrect ]
    respuestas.sort(function() { return Math.random() - 0.5 });
    console.log(respuestas);
    cleanPage(app)
        app.innerHTML = constrQuiz(user, disparaPreg.pregunta, respuestas)  
    comprobarPre() 
    
}
