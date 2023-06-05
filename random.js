let input = document.getElementById("text")
let addBtn = document.getElementById("addBtn")
let div = document.getElementById("div")
let shuffleBtn = document.getElementById("shuffleBtn")
let result = document.getElementById("result")


shuffleBtn.disabled = true


let texts = []
addBtn.onclick = () => {
    texts.push(input.value)
    let last = texts[texts.length - 1];
    div.innerHTML += `<div><p>${last}</p></div>`
    console.log(input.value)
    input.value = ""
    shuffleBtn.disabled = false
    addBtn.disabled = true
}


shuffleBtn.onclick = () => {
    let rand = Math.floor(Math.random()*texts.length)
    result.textContent = texts[rand]
}

input.addEventListener("input", function() {
    if (input.value.trim() === "") {
        addBtn.disabled = true;
    } else {
        addBtn.disabled = false;
    }
});

