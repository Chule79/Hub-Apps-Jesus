import { getSelectCharacter } from "../pages/hero";
import { todoPokemon } from "../services/api";

export const eventCharacter =  () =>{
    const select = document.querySelectorAll('.cromo');
    select.forEach((sele) => {
        sele.addEventListener("click", (eleg) => {
            const pls = eleg.target.id;
            const data = todoPokemon;
            getSelectCharacter(data, Number(pls));
        })
      })
}
