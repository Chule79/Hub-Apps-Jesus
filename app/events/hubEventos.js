import { constrPokemon } from "../components/pokemons/pokemons"
import { pokeType } from "../pages/pokePage"
import { cleanPage } from "../utils/cleanPage"
import { changeColor } from './colores'


export const addEvents = () => {
    eventPoke()
}





export const eventRaya = () => {
    const tresRaya = document.querySelector("#tresRaya")
    tresRaya.addEventListener("click", () => "")
}

export const eventMemory = () => {
    const memoryGame = document.querySelector("#memoryGame")
    memoryGame.addEventListener("click", () => "")
}

export const eventPoke = () => {
    const pokeApi = document.querySelector("#pokeApi")
    pokeApi.addEventListener("click", () => {
        const header = document.querySelector("#header")
        cleanPage(app)
        
        header.innerHTML += constrPokemon()
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
    quizNeo.addEventListener("click", () => "")
}