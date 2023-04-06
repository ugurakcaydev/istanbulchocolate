let counter = document.getElementById('counter');
let addButton = document.querySelector('.add');
let subtractButton = document.querySelector('.subtract');
let count = 0;
addButton.addEventListener("click", () => {
    count++;
    updateDisplay();
});
subtractButton.addEventListener("click", () => {
    if (count > 0) {
        count--
    }
    updateDisplay();
});
function updateDisplay() {
    counter.innerHTML = count;
};