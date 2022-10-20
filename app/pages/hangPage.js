import { hangAciert, hangContador, hangError, hangFinal, hangManCons, hangPalabra } from "../components/hangMan/hangMan"
import { naviColor, naviHome } from "../components/nav/nav"
import { changeColor, home } from "../events/colores"
import { hangEvent, indice } from "../events/hangEvent"
import { cleanPage } from "../utils/cleanPage"

const palbrasHang =["casa", "hueso", "dragon", "cabeza", "meteorito", "saltamontes", "homohabili", "clabaza", "mosca", "tenedor", "camiseta", "todoterreno", "triciclo", "superman"]

export const hangPage = () => {
   
    const app = document.querySelector("#app")
    cleanPage(app)
    app.innerHTML = hangManCons()  
    selectorPalabra()

}


const selectorPalabra = () => {
    
    palbrasHang.sort(function() { return Math.random() - 0.5 });
        descompositor(palbrasHang[indice])
}


const descompositor = (pasar) => {
    cleanPage(app)
    app.innerHTML = hangManCons()  
    let vidas = 5
    let victoria = 0
    const palOculta = document.querySelector("#oculta")
    let arrayL = pasar.split('')
    const contVidas = document.querySelector("#contador")
    contVidas.innerHTML = hangContador(vidas)
   

    arrayL.forEach(element => {
        
        palOculta.innerHTML += hangPalabra(element)
     
    })
    
        const btnCont = document.querySelector("#comprobarLetra")
        const esconderText = document.querySelectorAll("#letrasO")
        btnCont.addEventListener("click",() => {
            if (vidas > 0) {
            const inputLetra = document.querySelector("#letraIntroducida").value  
            if (arrayL.includes(inputLetra)) {
                esconderText.forEach((letra) => {
                    if (inputLetra == letra.dataset.value) {
                        letra.style.color = "black"
                        victoria++
                        if (victoria == esconderText.length) {
                            cleanPage(app)
                            app.innerHTML = hangAciert()
                            const aciertBtn = document.querySelector("#hangAciert")
                            aciertBtn.addEventListener("click", () => {
                            selectorPalabra()
                })
                        }
                    }
                }) 
                }else{
                    vidas--
                    contVidas.innerHTML = hangContador(vidas)
                    if(vidas == 0){
                        const videoHang = document.querySelector("#hangmanFoto")
                        videoHang.innerHTML = hangFinal()
                        setTimeout(muerte, 5500);
                    } 
                }
            } 
           
            
    })   
        
} 




const muerte = () =>{
    cleanPage(app)
    app.innerHTML = hangError()
    const errorBtn = document.querySelector("#hangError")
    errorBtn.addEventListener("click", () => {
        selectorPalabra()
    })
}


