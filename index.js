let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    let saveEl = document.getElementById("save-el")        
    saveEl.textContent += countStr    
    count = 0
    countEl.textContent = count
}
