let items = [];

const itemdiv = document.getElementById("items");
const input = document.getElementById("item_input")
const storagekey = "items";

function loaditems(){
    const olditems = localStorage.getItem(storagekey);
    if (olditems) items = JSON.parse(olditems);
    renderitems();
}

function renderitems(){
    itemdiv.innerHTML = "";

    for (const [idx, item] of Object.entries(items)){
        const container = document.createElement("div");
        container.style.marginBottom = "10px";
        
        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.marginRight = "10px";
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => removeitems(idx);

        container.appendChild(text);
        container.appendChild(button);



        itemdiv.appendChild(container);

    }
}

function saveitems(){
    const stringitems = JSON.stringify(items);
    localStorage.setItem(storagekey, stringitems);
}

function additems(){
    const value = input.value;
    if(!value){
        alert("You cannot add an empty item");
        return
    }
    items.push(value);
    renderitems();
    input.value = "";
    saveitems();
}

function removeitems(idx){
    items.splice(idx, 1);
    renderitems();
    saveitems();

}

document.addEventListener("DOMContentLoaded", loaditems);