import { topoCromo, topoDiv, topoScore } from "../components/topos/topo"
import { score, topoEvent, velocidad } from "../events/toposEvent"
import { cleanPage } from "../utils/cleanPage"

export const topoPage = () =>{
    topoEvent()
    setTimeout(pintTopo, `${velocidad}` )
}  
let topos = 0 


const pintTopo  = () =>{
    
    const campoTopos = document.querySelector("#topoTabla")
    const min = 5
    const minA = 10
    const max = 100
    const maxA = 95
    const alto = Math.trunc(Math.random( )*(maxA - minA))
    const ancho = Math.trunc(Math.random( )*(max - min))
    campoTopos.innerHTML += topoCromo(topos)
    const topillo = document.getElementById(topos)
    topillo.style.top = `${alto}%` 
    topillo.style.right = `${ancho}%`
    topos++
    topoPage()
    borraTopo()
    
}

const borraTopo = () => {
    let escopeta = 0
    const todoTopos = document.querySelectorAll(".topoCromo")
    todoTopos.forEach((borrar)=> {
        console.log(escopeta);
        if (escopeta == 5) {
            todoTopos[0].remove()
        }
       escopeta++
    })
}


