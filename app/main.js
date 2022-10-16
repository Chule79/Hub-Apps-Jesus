import { inicio } from './components/inicio/inicio'
import { naviColor } from './components/nav/nav'
import { changeColor } from './events/colores'
import { initUsuario } from './events/inicioEvent'
import {  getData, getTypes } from './services/api'
import './style.css'
import { randomColor } from './utils/colores'


export let dataSafe 

export const fetchData = async () => {
    const data = await getData()
    dataSafe = data.results;
    return data 
  }






const app = document.querySelector("#app")
const header = document.querySelector("#header")

header.innerHTML = naviColor()
app.innerHTML = inicio()
randomColor()
changeColor()
initUsuario()
fetchData()
