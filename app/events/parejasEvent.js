import { parejas, parejasError, puntuacionParejas } from "../components/parejas/parejas"
import { creaParejas } from "../pages/parejasPage"
import { cleanPage } from "../utils/cleanPage"

export const parejasEvent = () => {
    let caso = 5
    let carta1 = 0
    let carta2 = 0
    let acc = 0
    
    const cogerCartas = document.querySelectorAll(".imgPareja")

    if (caso > 0) {
        const panelVidas = document.querySelector("#intentoCartas")
        cleanPage(panelVidas)
        panelVidas.innerHTML = puntuacionParejas(caso)
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

                } else{ 
                    caso--
                    setTimeout(comprobador,1000)
                  
                } 

            }

            
        })

        
    })
}
else{
    const app = document.querySelector("#app")
    cleanPage(app)
    app.innerHTML = parejasError()
    muerto()


}
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