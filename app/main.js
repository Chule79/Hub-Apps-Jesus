import { inicio } from './components/inicio/inicio'
import { naviColor } from './components/nav/nav'
import { changeColor } from './events/colores'
import { initUsuario } from './events/inicioEvent'
import './style.css'


const app = document.querySelector("#app")
const header = document.querySelector("#header")

header.innerHTML = naviColor()
app.innerHTML = inicio()

changeColor()
initUsuario()