let count = -1
let Counter = document.getElementById("counter")
console.log(Counter)

let last = document.getElementById("Last")
console.log(last)






function increment() {
    count = count + 1
    Counter.textContent = count
}
increment()
function save() {
    last.textContent = count
    count = -1
} 
function reset() {
    Counter.innerText = 0
}