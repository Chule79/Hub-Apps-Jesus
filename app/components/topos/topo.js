import "./topo.css"



export const topoDiv = (a) => {
    return `
        <div class="scoreDiv" id="scoreDiv">
        
        </div>
        <div class="topoTabla" id="topoTabla">
         
        </div>
    `
}



export const topoCromo = (a) => {
    return `
        <div class="topoCromo" id="${a}">
            <img src="topo.png">
        </div>
    `
}


export const topoScore = (a) => {
    return `
        <p class="textScore">Score: ${a}</p>
    `
}