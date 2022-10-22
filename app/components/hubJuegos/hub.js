import "./hub.css"
export const hubGames = (nikname) => {
    const games = `
        <div id="bienVenida" class="bienVenida"><h2>Bienvenido 👋 ${nikname} </h2></div>
        <div id="tresRaya" class="tresRaya"><h3>3 en Raya</h3></div>
        <div id="memoryGame" class="memoryGame" ><h3>Memory Game</h3></div>
        <div id="pokeApi" class="pokeApi"><h3>PokeApi</h3></div>
        <div id="topo" class="topo"><h3>Whaka-MetalSlug</h3></div>
        <div id="hangMan" class="hangMan"><h3>HangMan</h3></div>
        <div id="quizNeo" class="quizNeo"><h3>Quiz-Neo</h3></div>
    `
    return games
}