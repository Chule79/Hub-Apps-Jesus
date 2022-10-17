import { constrPokemon } from "../components/pokeNav/pokeNav"
import { constrQuiz } from "../components/quiz/quiz"
import { tresRaya } from "../components/tresRaya/tresRaya"
import { pokeType } from "../pages/pokePage"

import { cleanPage } from "../utils/cleanPage"
import { changeColor } from './colores'
import { quizEvent } from "./quizEvent"


export const addEvents = () => {
    eventPoke()
    eventRaya()
    eventQuiz()
}





export const eventRaya = () => {
    const rayero = document.querySelector("#tresRaya")
    rayero.addEventListener("click", () =>{
        console.log("hola");
        const app = document.querySelector("#app")
        cleanPage(app)
        app.innerHTML += tresRaya()
        changeColor()
    })} 


export const eventMemory = () => {
    const memoryGame = document.querySelector("#memoryGame")
    memoryGame.addEventListener("click", () =>{ 
    }) 
}

export const eventPoke = () => {
    const pokeApi = document.querySelector("#pokeApi")
    pokeApi.addEventListener("click", () => {
        const app = document.querySelector("#app")
        cleanPage(app)
        app.innerHTML += constrPokemon()
        changeColor()
        pokeType()
    })
}

export const eventTopo = () => {
    const topo = document.querySelector("#topo")
    topo.addEventListener("click", () => "")
}

export const eventHang = () => {
    const hangMan = document.querySelector("#hangMan")
    hangMan.addEventListener("click", () => "")
}

export const eventQuiz = () => {
    const quizNeo = document.querySelector("#quizNeo")
    quizNeo.addEventListener("click", () => {
        const app = document.querySelector("#app")
        cleanPage(app)
        app.innerHTML = constrQuiz()
        quizEvent()
    })
}