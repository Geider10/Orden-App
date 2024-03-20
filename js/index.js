const d = document;
const btnAgregar = d.getElementById("btnAgregar");
const iptTitulo = d.getElementById("iptTitulo");
const typeTitulo = d.getElementById("typeTitulo");
const bodyTablero = d.getElementById("bodyTablero");

btnAgregar.addEventListener("click",()=>{
    if(checkInput(iptTitulo).length >1 && checkTitulos() == "Tarea"){
        const taskLista = d.createElement("div");
        taskLista.classList.add("lista__tarea");
        taskLista.setAttribute("data-taskLight","true");
        taskLista.innerHTML = //html
        `
        <div class="tarea__icons"> 
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
            <svg  class="off" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
        </div>
        <textarea placeholder="Nombre de la tarea" readonly data-colorLight>${checkInput(iptTitulo)}</textarea>
        `
        autoScale(taskLista.children[1]);
        editNameTxt(taskLista.children[1],taskLista.children[0].children[0],taskLista.children[0].children[1]);
        destacarTask(taskLista.children[0].children[2],"fill");
        bodyTablero.children[0].appendChild(taskLista);
    }
    else if(checkInput(iptTitulo).length >1 && checkTitulos() == "Lista"){
        const tableroLista = d.createElement("div");
        tableroLista.classList.add("tablero__lista");
        tableroLista.setAttribute("data-listLight","true");
        tableroLista.innerHTML=//html
        `
        <div class="lista__nombre">
            <input type="text" value="${checkInput(iptTitulo)}"readonly data-colorLight>
            <div>
                <span><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg></span>
                <span class="off"><svg  xmlns="http://www.w3.org/2000/svg"width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg></span>
            </div>
        </div>
        `
        editNameTxt(tableroLista.children[0].children[0],tableroLista.children[0].children[1].children[0],tableroLista.children[0].children[1].children[1]);
        bodyTablero.appendChild(tableroLista);
        typeTitulo.children[1].removeAttribute("disabled");
    }
    iptTitulo.value="";
})
const checkInput = (txt)=>{
    const convert = txt.value.toLowerCase();
    const firstChar = convert.slice(0,1);
    return convert.replace(firstChar,firstChar.toUpperCase());
}
const checkTitulos = ()=>{
    typeTitulo.addEventListener("change",(e)=>{
        return e.target.value;
    })
    return typeTitulo.value;
}
const autoScale = (area)=>{
    area.addEventListener("keyup",e=>{
        area.style.height = "54px";
        let sHeight = e.target.scrollHeight;
        area.style.height = `${sHeight}px`;
    })
}
const editNameTxt = (area,btnEdit,btnCheck)=>{
    let edit = false;
    area.addEventListener("mousedown",(e)=>{
       if(edit == false){
        e.target.style.border = "none"
       }
    });
    btnEdit.addEventListener("click",()=>{
        area.style.border = "1px solid currentColor";
        area.removeAttribute("readonly");
        btnCheck.classList.remove("off");
        btnEdit.classList.add("off");
        edit = true;
    })
    btnCheck.addEventListener("click",()=>{
        area.style.border = "none";
        area.setAttribute("readonly","true");
        btnCheck.classList.add("off");
        btnEdit.classList.remove("off");
        area.value = checkInput(area);
    })
}
const destacarTask=(btn, atr)=>{
    let pintarStar = false;
    btn.addEventListener("click",()=>{
        if(pintarStar == false){
            btn.setAttribute(atr,"#eeff00");
            pintarStar = true;
        }
        else{
            btn.setAttribute(atr,"#fff");
            pintarStar = false;
        }
    })
}
const btnMode = d.getElementById("btnMode");
btnMode.addEventListener("click",(e)=>{
    e.preventDefault();
    btnMode.classList.contains("colorLight")?  btnMode.textContent ="☀️":    btnMode.textContent="🌜";

    const colorLight = d.querySelectorAll("[data-colorLight]");
    const taskLight = d.querySelectorAll("[data-taskLight]");
    const listLight = d.querySelectorAll("[data-listLight]");

    colorLight.forEach(n => n.classList.toggle("colorLight"));
    taskLight.forEach(n => n.classList.toggle("taskLight"));
    listLight.forEach(n => n.classList.toggle("listLight"));
   
})