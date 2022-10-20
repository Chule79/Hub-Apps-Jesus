import { topoScore } from "../components/topos/topo"

export let score = 0
export const topoEvent = () =>{
    const todoTopos = document.querySelectorAll(".topoCromo")
    todoTopos.forEach((topete)=>{
        topete.addEventListener("click", () => {
            score += 100
            topete.remove()
            const puntos = document.querySelector("#scoreDiv")
            puntos.innerHTML = topoScore(score)
        })

    })
}
