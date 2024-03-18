//import Sortable from 'sortablejs';
const d = document;
const btnAgregar = d.getElementById("btnAgregar");
const iptTitulo = d.getElementById("iptTitulo");
const typeTitulo = d.getElementById("typeTitulo");
const mainLista = d.getElementById("mainLista");
const bodyTablero = d.getElementById("bodyTablero");
btnAgregar.addEventListener("click",()=>{
    if(checkInput().length >1 && checkTitulos() == "Tarea"){
        const taskLista = d.createElement("div");
        taskLista.classList.add("lista__tarea")
        taskLista.innerHTML = //html
        `
        <div class="tarea__icons"> 
           <span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg></span>
           <span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg></span>
        </div>
        <textarea placeholder="Nombre de la tarea" required class="area">${checkInput()}</textarea>
        `
        mainLista.appendChild(taskLista);
        autoSizeTxt();
        iptTitulo.value=" ";

    }
    else if( checkInput().length >1 && checkTitulos() == "Lista"){
        const tableroLista = d.createElement("div");
        tableroLista.classList.add("tablero__lista");
        tableroLista.innerHTML=//html
        `
        <div class="lista__nombre">
            <input type="text" value="${checkInput()}"readonly="true">
        </div>
        `
        bodyTablero.appendChild(tableroLista);
        iptTitulo.value=" ";
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
const autoSizeTxt =()=>{
    const txtArea = d.querySelectorAll(".area");
    txtArea.forEach(txt =>{
        txt.addEventListener("keyup",e=>{
            txt.style.height = "54px";
            let scHeight = e.target.scrollHeight;
            txt.style.height = `${scHeight}px`;
        })
    })

}
const tareas = document.getElementsByClassName("tablero__lista");
// txtArea.addEventListener("keyup",e=>{
//     txtArea.style.height = "54px";
//     let scHeight = e.target.scrollHeight;
//     txtArea.style.height = `${scHeight}px`;
// })
// PROBLEMA 
new Sortable(tareas, {
    animation: 150,
    ghostClass: 'blue-background-class'
});