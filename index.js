document.documentElement.style.backgroundColor = "silver";
document.getElementById("title").style.color = "green";

let h3Tags = document.getElementsByTagName("h3");
for (var i = 0; i < h3Tags.length; i++) {
    h3Tags[i].style.textTransform = "uppercase";
    }

let fruitList = document.getElementById("fruList");
let newFruit = document.createElement("li");
newFruit.textContent = "Apples";
fruitList.appendChild(newFruit);

var vegList = document.getElementById("vegList");
let newVegetable = document.createElement("li");
newVegetable.textContent = "Carrots";
vegList.appendChild(newVegetable);