import "./quiz.css"

export const constrQuiz =  (nikname, pregunta, respuestas) =>{
    return `
        <h3 class="saludo">Hola! ${nikname} Bienvenido a Quiz-Neo</h3>
            <div id="pregunta" class="pregunta">
                ${pregunta}
            </div>
            
               <a id="selectRespons" data-res="${respuestas[0]}" class="respuestaA">a) ${respuestas[0]}</a>
               <a id="selectRespons" data-res="${respuestas[1]}" class="respuestaB">b) ${respuestas[1]}</a>
               <a id="selectRespons" data-res="${respuestas[2]}" class="respuestaC">c) ${respuestas[2]}</a>
               <a id="selectRespons" data-res="${respuestas[3]}" class="respuestaD">d) ${respuestas[3]}</a>
            
    
    `
}  




export const correctAnswer = () => {
    return `

        <div id="cajaQuiz" class="cajaQuiz">
            <h2>yeeeeehhhhh!!! 🥳 </h2>
           <button id="preBtn">Siguiente Pregunta</button>
        </div> 
    `
}

            
            
export const errorAnswer = () => {
    return `

        <div id="cajaError" class="cajaError">
            <h2>OOOOOHHH!! 😢 </h2>
           <button id="erroBtn">Reintentar</button>
        </div> 
    `
}