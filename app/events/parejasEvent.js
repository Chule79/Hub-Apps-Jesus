import { parejas, parejasError, parejasGanar, puntuacionParejas } from "../components/parejas/parejas"
import { creaParejas } from "../pages/parejasPage"
import { cleanPage } from "../utils/cleanPage"

export const parejasEvent = () => {
    let vidas = 7
    let carta1 = 0
    let carta2 = 0
    let acc = 0
    let ganar = 0
    const cogerCartas = document.querySelectorAll(".imgPareja")

        const panelVidas = document.querySelector("#intentoCartas")
        cleanPage(panelVidas)
        panelVidas.innerHTML = puntuacionParejas(vidas)
        cogerCartas.forEach((select) => {
        select.addEventListener("click", () => {
            
            select.style.opacity = "1" 

            if (acc % 2 == 0) {
                carta1 = select.id
                acc++
            } else {

                carta2 = select.id
                acc++ 
                if (carta1 == carta2) {
                    ganar++
                    if (ganar == cogerCartas.length /2) {
                        const app = document.querySelector("#app")
                        cleanPage(app)
                        app.innerHTML = parejasGanar()
                        ganaste()  
                    }
                    
                } else{ 
                   
                    vidas--
                    const panelVidas = document.querySelector("#intentoCartas")
                    cleanPage(panelVidas)
                    panelVidas.innerHTML = puntuacionParejas(vidas)
                        if (vidas == 0) {
                            const app = document.querySelector("#app")
                            cleanPage(app)
                            app.innerHTML = parejasError()
                            muerto()
                        }
                    setTimeout(comprobador,1000)

                  
                } 

            }

            
        })

        
    })

 const comprobador = () => {
    cogerCartas.forEach((item) => {

        if (item.id == carta1) {
            item.style.opacity = "0" 
        }
        if (item.id == carta2) {
            item.style.opacity = "0" 
        }
    
    
    })
}
}





const muerto = () => {
    const btnerror = document.querySelector("#parejaError")
    btnerror.addEventListener("click", () => creaParejas())
}


const ganaste = () => {
    const btnganar = document.querySelector("#parejaCorrect")
    btnganar.addEventListener("click", () => creaParejas())
}