import { hangManCons } from "../components/hangMan/hangMan"
import { naviHome } from "../components/nav/nav"
import { parejas } from "../components/parejas/parejas"
import { constrPokemon } from "../components/pokeNav/pokeNav"
import { correctAnswer } from "../components/quiz/quiz"
import { topoDiv, topoScore } from "../components/topos/topo"
import { tresRaya } from "../components/tresRaya/tresRaya"
import { hangPage } from "../pages/hangPage"
import {  creaParejas } from "../pages/parejasPage"
import { pokeType } from "../pages/pokePage"
import { quizPage } from "../pages/quizPage"
import { topoPage } from "../pages/topos"

import { cleanPage } from "../utils/cleanPage"
import { changeColor, home } from './colores'
import { parejasEvent } from "./parejasEvent"
import { comprobarPre, quizEvent } from "./quizEvent"
import { initTopo, score } from "./toposEvent"
import { juegaRaya } from "./tresRayaEvent"


export const addEvents = () => {
    eventPoke()
    eventRaya()
    eventQuiz()
    eventHang()
    eventTopo()
    eventMemory()
}





export const eventRaya = () => {
    const rayero = document.querySelector("#tresRaya")
    rayero.addEventListener("click", () =>{
        
        const app = document.querySelector("#app")
        cleanPage(app)
        changeColor()
        juegaRaya()
    })} 


export const eventMemory = () => {
    const memoryGame = document.querySelector("#memoryGame")
    memoryGame.addEventListener("click", () =>{ 
        creaParejas()
        parejasEvent()
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
    topo.addEventListener("click", () => {
        const app = document.querySelector("#app")
        cleanPage(app)
        app.innerHTML += topoDiv()
        const puntos = document.querySelector("#scoreDiv")
        puntos.innerHTML = topoScore(score)
        topoPage()
        initTopo()
    })
}

export const eventHang = () => {
    const hangMan = document.querySelector("#hangMan")
    hangMan.addEventListener("click", () => {
        hangPage()
    })
}

export const eventQuiz = () => {
    const quizNeo = document.querySelector("#quizNeo")
    quizNeo.addEventListener("click", () => {
        const app = document.querySelector("#app")
        cleanPage(app)
        app.innerHTML = correctAnswer()
        quizPage()
        comprobarPre()
    })
}