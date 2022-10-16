export const randomColor = () =>{
    const min = 0
    const max = 251
        const color1 = Math.trunc(Math.random( )*(max - min))
        const color2 = Math.trunc(Math.random( )*(max - min))
        const color3 = Math.trunc(Math.random( )*(max - min))

        console.log(color1);
        console.log(color2);
        console.log(color3);

        document.body.setAttribute("style",`background-color: rgb(${color1}, ${color2}, ${color3});`)  
}