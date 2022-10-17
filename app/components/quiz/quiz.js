export const constrQuiz =  (nikname, pregunta, respuestas) =>{
    return `
        <div id="cajaQuiz" class="cajaQuiz">
            <h3>Hola! ${nikname} Bienvenido a QuizNeo</h3>
            <div id="pregunta" class="pregunta">
                ${pregunta}
            </div>
            <div id="respuestas" class="respuestas">
               <a>a) ${respuestas[0]}</a>
               <a>b) ${respuestas[1]}</a>
               <a>c) ${respuestas[2]}</a>
               <a>d) ${respuestas[3]}</a>
            </div>

        </div> 
    
    `
} 