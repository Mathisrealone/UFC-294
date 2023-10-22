const bouton = document.querySelectorAll("button");
const box = document.querySelectorAll(".box");
const tab = document.querySelector(".box-first")

bouton.forEach((element, i) => {
    element.addEventListener("click", ()=>{
        box[i].style.display = "flex";
        tab.style.display = "none";
    })
});

const cross = document.querySelectorAll(".cross-box");

cross.forEach((element, i) => {
    element.addEventListener ("click", () =>{
        box[i].style.display = "none";
        tab.style.display = "flex";
    })
});






