import { tresRaya } from "../components/tresRaya/tresRaya";
import { cleanPage } from "../utils/cleanPage";
import { eventRaya } from "./hubEventos";

const combos = [ ["uno","dos","tres"], ["cuatro","cinco","seis"], ["siete","ocho","nueve"], ["uno","cuatro","siete"], ["dos","cinco","ocho"], ["tres","seis","nueve"], ["uno","cinco","nueve"], ["tres","cinco","siete"],];



export const juegaRaya = () => {
    const app = document.querySelector("#app")
    app.innerHTML += tresRaya()
    reloadRaya()

    let todasCasillas = []
    let turnos = 0
    let jugador= []
    let maquina = [0]
    const tablero = document.querySelectorAll("#btRaya")
    tablero.forEach((casilla) => {
        todasCasillas.push(casilla.className)
        casilla.addEventListener("click", () => {
            if (turnos % 2 == 0) {
                casilla.style.pointerEvents = "none";
                const dibujoO = document.createTextNode("O")
                const fichaO = document.createElement("p")
                fichaO.appendChild(dibujoO)
                turnos++
                casilla.appendChild(fichaO)
                jugador.push(casilla.className)

                combos.forEach((combi) => {
                    let acumula = 0
                    combi.forEach((ganar) =>{
                        if (jugador.includes(ganar)) {
                            acumula++
                        }  else{
                            acumula = 0
                        }
                        if (acumula == 3){
                            alert("Jugador 1 ganastes");
                        }
                    })
                })
            } 
            

            else {
                casilla.style.pointerEvents = "none";
            
                const dibujoX = document.createTextNode("X")
                const fichaX = document.createElement("p")
                fichaX.appendChild(dibujoX)
                turnos++
                casilla.appendChild(fichaX)
                maquina.push(casilla.className)

                combos.forEach((combi) => {
                    let acumula2 = 0
                    combi.forEach((ganar) =>{
                        if (maquina.includes(ganar)) {
                            acumula2++
                        } else{
                            acumula2 = 0
                        }
                        if (acumula2 == 3){
                            alert("Jugador 2 ganastes");
                        }
                    })
                })
                
            } tablas(turnos)
        })
       
    })
    
}






const reloadRaya = () => {
    const btnRaya = document.querySelector("#btnReload")
    btnRaya.addEventListener("click", () => {
        const app = document.querySelector("#app")
        cleanPage(app)
        juegaRaya()
    })
}



const tablas = (a) =>{
    if (a == 9) {
        alert("Quedasteis en Tablas")
    }
}