import "./pokemons.css"


 export const typePokemon = (tipo) => {
    
    const tipoP = `
        <option value="${tipo.name}" id="inerType"> ${tipo.name}</option>
    `
    console.log(tipoP);
    return tipoP
}





export const constrPokemon = (mapPoke) =>{
    const pokedex = `
            <div id= "pokeNav" class= "pokeNav">
                <input type="checkbox" id="menuPoke">
                <label for="menuPoke">  
                      <img class="pokeLogo" src="pokeLogo.png">
                </label>
                <ul id='navi' class='navi'>
                    <li> 
                        <select name="pokeTipo" class="pokeTipo" id="pokeTipo">
                            <option value="seleccione"> Seleccione un Tipo</option>
                        </select>
                    </li>
                    <li>
                        <div class='searchPokemon'>
                            <input id="searchInput" type="search" name="q" placeholder="Find Pokemon"  >
                            <button id="btSearch" type="button">Search</button>
                        </div>
                    </li>
                </ul>
            </div>
    
    
    `
    return pokedex
}