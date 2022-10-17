import { filtrType } from "../pages/filtros";
import { cleanPage } from "../utils/cleanPage";

export const typeEvent = () => {

    const opcionesType = document.querySelectorAll("#pokeTipo")
    opcionesType.forEach((element)  => {
    element.addEventListener("change", (eleg) => {
        const pls = eleg.target.value;
        const tabla = document.querySelector("#tablon")
        cleanPage(tabla)
        filtrType(pls)
    })
  })
   
}
