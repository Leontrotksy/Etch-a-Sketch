const grid=document.querySelector("#grid");
let cont=null;
let temp=null;
for(let i=0;i<16;i++){
    cont=document.createElement("div");
    cont.style.display="flex";
    for(let j=0;j<16;j++){
        temp=document.createElement("div");
        cont.appendChild(temp);
    }
    grid.appendChild(cont);
}