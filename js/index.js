const d = document;
const txtArea = d.getElementById("area");
txtArea.addEventListener("keyup",e=>{
    txtArea.style.height = "54px";
    let scHeight = e.target.scrollHeight;
    txtArea.style.height = `${scHeight}px`;
})