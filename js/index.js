document.addEventListener("DOMContentLoaded", () => {

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
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
        <details >
            <summary><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg></summary>
            <ul>
               <li >Editar</li>
               <li class="off">Guardar</li>
               <li >Eliminar</li>
           </ul>
        </details>
        <textarea placeholder="Nombre de la tarea" readonly data-colorLight>${checkInput(iptTitulo)}</textarea>
        `
        const iptTt = taskLista.children[2];
        const btnEditt = taskLista.children[1].children[1].children[0];
        const btnGt = taskLista.children[1].children[1].children[1];
        const btnDeletet =  taskLista.children[1].children[1].children[2];
        const bntStar = taskLista.children[0]
        autoScale(iptTt);
        editNameTxt(iptTt,btnEditt,btnGt,btnDeletet,taskLista);
        destacarTask(bntStar,"fill");
        if(localStorage.getItem("tema") == "light"){
            taskLista.classList.add("taskLight");
            iptTt.classList.add("colorLight");
        }
        bodyTablero.children[0].appendChild(taskLista);
       
    }
    else if(checkInput(iptTitulo).length >1 && checkTitulos() == "Lista"){
        const tableroLista = d.createElement("div");
        tableroLista.classList.add("tablero__lista");
        tableroLista.classList.add("listas");
        tableroLista.setAttribute("data-listLight","true");
        tableroLista.innerHTML=//html
        `
        <div class="lista__nombre">
            <input  type="text" value="${checkInput(iptTitulo)}"readonly data-colorLight>
            <details>
               <summary><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg></summary>
                <ul>
                 <li >Editar</li>
                 <li class="off">Guardar</li>
                 <li >Eliminar</li>
                </ul>
           </details>
        </div>
        `
        const iptT =tableroLista.children[0].children[0];
        const btnEdit =tableroLista.children[0].children[1].children[1].children[0];
        const btnG = tableroLista.children[0].children[1].children[1].children[1];
        const btnDelete = tableroLista.children[0].children[1].children[1].children[2];

        editNameTxt(iptT,btnEdit,btnG,btnDelete,tableroLista);
        typeTitulo.children[1].removeAttribute("disabled");
        if(localStorage.getItem("tema") == "light"){
            tableroLista.classList.add("listLight");
            iptT.classList.add("colorLight");
        }
        bodyTablero.appendChild(tableroLista);
        addSortListas();
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
let editNameTxt = (area,btnEdit,btnCheck,btnDelete,content)=>{
    let edit = false;
    area.addEventListener("mousedown",(e)=>{
       if(edit == false){
        e.target.style.border = "none";
        console.log("se bloquea border");
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
    btnDelete.addEventListener("click",()=>{
        const padre = content.parentElement;
        padre.removeChild(content);
        
        if(bodyTablero.children[0] == undefined ){
           typeTitulo.children[1].setAttribute("disabled","true");
           typeTitulo.value = "Lista";
        }
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
            btn.setAttribute(atr,"none");
            pintarStar = false;
        }
    })
}

const addSortListas =()=>{
    var listasTablero = d.querySelectorAll(".listas");
    listasTablero.forEach(l=>{
        // console.log(l);
        new Sortable(l,{group:"shared"});
        // var sor = Sortable.create(l,{group:"shared"});
    })
}
const btnMode = d.getElementById("btnMode");
btnMode.addEventListener("click",(e)=>{
    e.preventDefault();
    btnMode.textContent == "☀️"? changeTema("light"): changeTema("dark");
})
const changeTema = (tipoTema)=>{
    const colorLight = d.querySelectorAll("[data-colorLight]");
    const taskLight = d.querySelectorAll("[data-taskLight]");
    const listLight = d.querySelectorAll("[data-listLight]");
    if(tipoTema == "light"){
        btnMode.textContent="🌜";
        localStorage.setItem("tema","light");
        colorLight.forEach(n => n.classList.add("colorLight"));
        taskLight.forEach(n => n.classList.add("taskLight"));
        listLight.forEach(n => n.classList.add("listLight"));
    }
    else if(tipoTema == "dark"){
        btnMode.textContent ="☀️";
        localStorage.setItem("tema","dark");
        colorLight.forEach(n => n.classList.remove("colorLight"));
        taskLight.forEach(n => n.classList.remove("taskLight"));
        listLight.forEach(n => n.classList.remove("listLight"));
    }
}
localStorage.getItem("tema") == null && localStorage.setItem("tema","dark");
localStorage.getItem("tema") == "dark" && changeTema("dark");
localStorage.getItem("tema") == "light" && changeTema("light");

});