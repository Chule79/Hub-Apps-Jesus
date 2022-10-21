import "./parejas.css"


export const parejas = (a) => {
    return `
        <di class="intetoCartas" id="intentoCartas">
           
        </di>
        <button  id="btnBaraja" class="btnBaraja">Barajar</button>
        <div class="mesaCartas" id="mesaCartas">
        
        </div>
    `
}


export const parejaCromo= (a, b) => {
     return `
        <div class="cartaDibu"  id="cartaDibu" >
                <img class="imgPareja"  src="${b}" id="${a}" draggable="false">
                </img>
        </div>
    `
    
}



export const parejasError = () => {
    return `
        <div id="cajaError" class="cajaError">
            <h2>OOOOOHHH!! 😢 </h2>
           <button id="parejaError">Volver a jugar</button>
        </div> 
    `
}


export const puntuacionParejas = (a) => {
    return `
        <p class="intentos" class="intentos">Te quedan ${a} intentos</p>
    `
}