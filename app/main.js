import { inicio } from './components/inicio/inicio'
import { naviColor, naviHome } from './components/nav/nav'
import { changeColor, home } from './events/colores'
import { initUsuario } from './events/inicioEvent'
import {  getData, getPreguntas, getTypes } from './services/api'
import './style.css'
import { randomColor } from './utils/colores'


export let dataSafe 

export const fetchData = async () => {
    const data = await getData()
    dataSafe = data.results;
    return data 
  }




export let todasPreguntas = []

  export const fetchPreguntas = async () =>{
    const data = await getPreguntas()
    todasPreguntas = data
    return data
  }






const app = document.querySelector("#app")



const header = document.querySelector("header")

header.innerHTML += naviColor()
header.innerHTML += naviHome()


app.innerHTML = inicio()
randomColor()
changeColor()
initUsuario()
fetchData()
fetchPreguntas()
home()