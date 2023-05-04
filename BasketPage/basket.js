let leftDiv = document.querySelector(".leftDiv")
let storedProductId = localStorage.getItem("productId")

let basketProductArray = storedProductId ? JSON.parse(storedProductId) : [];
basketProductArray.forEach(product => {
    addBasket(product)
    console.log(product);
})
function addBasket(product) {
    let basketProductDiv = document.createElement("div")
    basketProductDiv.classList.add("basketProduct")
    leftDiv.appendChild(basketProductDiv)

    let leftBasket = document.createElement("div")
    leftBasket.classList.add("leftBasket")
    basketProductDiv.appendChild(leftBasket)

    let imageDivDom = document.createElement("div")
    let imgDom = document.createElement("img")
    imageDivDom.classList.add("image")
    imageDivDom.appendChild(imgDom)
    leftBasket.appendChild(imageDivDom)

    let productNameDom = document.createElement("p")
    productNameDom.classList.add("productName")
    productNameDom.innerHTML = product.productName
    leftBasket.appendChild(productNameDom)

    let buttons = document.createElement("div")
    buttons.classList.add("buttons")
    basketProductDiv.appendChild(buttons)

    let subtractButton = document.createElement("button")
    subtractButton.classList.add("subtractButton")
    subtractButton.disabled = true
    subtractButton.innerHTML = "-"
    buttons.appendChild(subtractButton)

    let counter = document.createElement("div")
    counter.classList.add("counter")
    counter.innerHTML = product.productClick
    buttons.appendChild(counter)

    let addButton = document.createElement("button")
    addButton.classList.add("addButton")
    addButton.innerHTML = "+"
    buttons.appendChild(addButton)

    let showPrice = document.createElement("div")
    showPrice.classList.add("showPrice")
    showPrice.innerHTML = `${product.productPrice} TL`
    basketProductDiv.appendChild(showPrice)

    let trashDiv = document.createElement("div")
    trashDiv.classList.add("trashDiv")


    let trashImg = document.createElement("img")
    trashImg.classList.add("trash")
    trashImg.src = "../icons/trash.png"
    trashDiv.appendChild(trashImg)
    basketProductDiv.appendChild(trashDiv)
}







// JavaScript kodu
// const buttons = document.querySelectorAll('.buttons');

// buttons.forEach((button) => {
//     const counter = button.querySelector('.counter');
//     const addButton = button.querySelector('.addButton');
//     const subtractButton = button.querySelector('.subtractButton');
//     let count = 0;

//     addButton.addEventListener('click', () => {
//         count++;
//         counter.textContent = count;
//         subtractButton.disabled = false
//     });

//     subtractButton.addEventListener('click', () => {
//         if (count > 1) {
//             count--;
//             counter.textContent = count;
//         } if (count <= 1) {
//             subtractButton.disabled = true
//         }
//     });
// });





const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
