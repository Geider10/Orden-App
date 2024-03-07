const d = document;
// const txtArea = d.getElementById("area");
// txtArea.addEventListener("keyup",e=>{
//     txtArea.style.height = "54px";
//     let scHeight = e.target.scrollHeight;
//     txtArea.style.height = `${scHeight}px`;
// })

const btnAgregar = d.getElementById("btnAgregar");
const iptTitulo = d.getElementById("iptTitulo");
const typeTitulo = d.getElementById("typeTitulo");
btnAgregar.addEventListener("click",()=>{
    if(checkInput().length >1 && checkTitulos() == "Tarea"){
        console.log("Agrego una tarea")
    }
    else if( checkInput().length >1 && checkTitulos() == "Lista"){
       console.log("Agrego una lista");
    }
    else{
        console.log("No agrego nada");
    }
})
const checkInput = ()=>{
    const convert = iptTitulo.value.toLowerCase();
    const firstChar = convert.slice(0,1);
    return convert.replace(firstChar,firstChar.toUpperCase());
}
const checkTitulos = ()=>{
    typeTitulo.addEventListener("change",(e)=>{
        return e.target.value;
    })
    return typeTitulo.value;
}