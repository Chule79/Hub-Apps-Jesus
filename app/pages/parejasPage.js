import { parejaCromo, parejas } from "../components/parejas/parejas";
import { parejasEvent } from "../events/parejasEvent";
import { cleanPage } from "../utils/cleanPage";

const cartas = [{id: 1, src:"masterball.png"}, {id: 1, src:"masterball.png"}, {id: 2, src:"nivelball.png"}, {id: 2, src:"nivelball.png"}, {id: 3, src:"pesoball.png"}, {id: 3, src:"pesoball.png"}, {id: 4, src:"pokeball.png"}, {id: 4, src:"pokeball.png"}, {id: 5, src:"rapidball.png"}, {id: 5, src:"rapidball.png"}, {id: 6, src:"safariball.png"}, {id: 6, src:"safariball.png"}, {id: 7, src:"superball.png"}, {id: 7, src:"superball.png"}, {id: 8, src:"ultraball.png"}, {id: 8, src:"ultraball.png"}, {id: 9, src:"pokeraya.png"}, {id: 9, src:"pokeraya.png"} , {id: 10, src:"lunaball.png"}, {id: 10, src:"lunaball.png"}]

export const creaParejas = () => {
    const app = document.querySelector("#app")
    cleanPage(app)
    app.innerHTML = parejas() 
    activaBarajar()
    cartas.sort(function() { return Math.random() - 0.5 });
    cartas.forEach((cart) => {      
        const tablero = document.querySelector("#mesaCartas")
        tablero.innerHTML += parejaCromo(cart.id, cart.src)
        setTimeout(ready, 3000)
        parejasEvent()
    })
   
    
       
}

export const activaBarajar = () =>{
    const btnBrajar = document.querySelector("#btnBaraja")
    btnBrajar.addEventListener("click", () => {
        creaParejas()
    })
}



const ready = () =>{
    const todasCartas = document.querySelectorAll(".imgPareja")
    todasCartas.forEach((cartaImg) => {
     
      cartaImg.style.opacity = "0" 
       
    })
}