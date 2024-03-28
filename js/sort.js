document.addEventListener("DOMContentLoaded",()=>{
    const lista1 = document.querySelector('.lista1');
    const lista2 = document.querySelector('.lista2');
    const listas = document.querySelectorAll(".listas");
    // var sort = Sortable.create(lista1,{ group: "shared"});
    // var sort = Sortable.create(lista2,{ group: "shared"});
    // new Sortable(lista1,{ group: "shared"});
    // new Sortable(lista2,{ group: "shared"});
    listas.forEach(l=>{
        console.log(l);
        new Sortable(l,{group:"shared"});
    })

})