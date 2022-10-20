import { topoScore } from "../components/topos/topo"

export let velocidad = 2000
export let score = 0
export const topoEvent = () =>{
    const todoTopos = document.querySelectorAll(".topoCromo")
    todoTopos.forEach((topete)=>{
        topete.addEventListener("click", () => {
            score += 100
            topete.remove()
            const puntos = document.querySelector("#scoreDiv")
            puntos.innerHTML = topoScore(score)
            
            if (score > 500) {
            velocidad = 1500
            }
            if (score > 1000) {
                velocidad = 1000
                }
            if (score > 1200) {
                velocidad = 750
                }
            if (score > 1500) {
                velocidad = 500
                }
            if (score > 2750) {
                velocidad = 250
                }
            if (score > 5000) {
                velocidad = 100
                }
                                                    
        })
        
    })
}
