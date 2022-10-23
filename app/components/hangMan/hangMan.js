import "./hangMan.css"

export const hangManCons = () => {
    return `
            <div class="hangmanFoto" id="hangmanFoto">
            
            </div>
            <div class="contador" id="contador">
            
            </div>

            <div class="oculta" id="oculta">

            </div>

            <input type="text" name="letraIntroducida" class="letraIntroducida" id="letraIntroducida" maxlength="1">
            <button class="comprobarLetra"  id="comprobarLetra"  >Send</button>
    `
}




export const hangContador = (a) =>{
    return `
        <p>Vidas: ${a}</p>
    `

}

export const hangPalabra = (a) =>{
    return `
    <div class="ocultarPalabra">
        <p class="letrasO" id="letrasO" data-value="${a}">${a}</p>
    </div>
    `
}




export const hangAciert = () => {
    return `

        <div id="cajaQuiz" class="cajaQuiz">
            <h2>yeeeeehhhhh!!! 🥳 </h2>
           <button id="hangAciert">Siguiente Palabra</button>
        </div> 
    `
}

            
            
export const hangError = () => {
    return `
        <div id="cajaError" class="cajaError">
            <h2>OOOOOHHH!! 😢 </h2>
           <button id="hangError">Volver a jugar</button>
        </div> 
    `
}


export const hangFinal = () => {
    return `
    <video autoplay muted id="myVideo">
        <source src="hangMan.mp4" type="video/mp4">
    </video>
    `
}