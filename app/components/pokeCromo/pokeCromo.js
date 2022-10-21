import "./pokeCromo.css"

export const pokeCromo= (character) => {
    const cromo = `
        <div class="cromo" data-idOper=${character.id} id=${character.id} >
                <img id=${character.id} src="${character.sprites.front_default}" draggable="false">
                </img>
        </div>
    `
    return cromo
}