import "./pokeHero.css"

export const insertPokeInf = (inf, stat, type) => {
    
    const pInf = `
        <h3>Name = ${inf.name}</h3>
        <p class="stats">Hp = ${stat[0].base_stat}</p>
        <p class="stats">Attack = ${stat[1].base_stat}</p>
        <p class="stats">Defense = ${stat[2].base_stat}</p>
        <p class="stats">Especial.A = ${stat[3].base_stat}</p>
        <p class="stats">Especial.D = ${stat[4].base_stat}</p>
        <p class="stats">Speed = ${stat[5].base_stat}</p>
        <p class="stats">Type = ${type[0].type.name}</p>
    `
    console.log(stat);
    return pInf
}


export const  insertPokeImg = (img) => {
    
    const pImg = `
        <img src="${img.sprites.front_default}">
    `
    console.log(pImg);
    return pImg
}






export const pokeHero= (select) => {
    const hero = `
        <div class="pokeInf" id="pokeInf">
            
        </div>
        <div class="pokeImg" id="pokeImg">
            
        </div>
    `
    return hero
}