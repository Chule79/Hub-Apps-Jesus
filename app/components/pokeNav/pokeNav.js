import "./pokeNav.css"


export const typePokemon = (tipo) => {
    
    const tipoP = `
        <option value="${tipo.name}" id="inerType"> ${tipo.name}</option>
    `
    return tipoP
}

export const regionPokemon = (reg) => {
    
    const regionP = `
        <option value="${reg.name}" id="inerRegion"> ${reg.name}</option>
    `
    console.log(regionP);
    return regionP
}




export const constrPokemon = () =>{
    const pokedex = `
            <div id= "pokeNav" class= "pokeNav">
                <input type="checkbox" id="menuPoke">
                <label for="menuPoke" class="menuPoke">  
                      <img class="pokeLogo" src="pokeLogo.png">
                </label>
                <ul id='navi' class='navi'>
                    
                    <li>
                        <div class='searchPokemon'>
                            <input id="searchInput" type="search" name="q" placeholder="Find Pokemon"  >
                            
                        </div>
                    </li>
                    <li> 
                        <select name="pokeTipo" class="pokeTipo" id="pokeTipo">
                            <option value="seleccione">Tipo</option>
                        </select>
                    </li>
                </ul>
            </div>
    
    
    `
    return pokedex
}



