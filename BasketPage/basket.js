let storedProductId = localStorage.getItem("productId")
let basketProductArray = storedProductId ? JSON.parse(storedProductId) : [];
let cartProducts = document.querySelector("#cartProducts")
checkEmpty(basketProductArray)
calculateTotalPrice(basketProductArray)
basketProductArray.forEach(product => {
    Cart(product)

})

function Cart(product) {

    let cartProductDiv = document.createElement("div")
    cartProductDiv.classList.add("cartProduct")
    cartProducts.appendChild(cartProductDiv)

    let leftCart = document.createElement("div")
    leftCart.classList.add("leftCart")
    cartProductDiv.appendChild(leftCart)

    let imageDivDom = document.createElement("div")
    let imgDom = document.createElement("img")
    imageDivDom.classList.add("image")
    imageDivDom.appendChild(imgDom)
    leftCart.appendChild(imageDivDom)

    let productNameDom = document.createElement("p")
    productNameDom.classList.add("productName")
    productNameDom.innerHTML = product.productName
    leftCart.appendChild(productNameDom)

    let buttons = document.createElement("div")
    buttons.classList.add("buttons")
    cartProductDiv.appendChild(buttons)

    let subtractButton = document.createElement("button")
    subtractButton.classList.add("subtractButton")
    subtractButton.innerHTML = "-"
    buttons.appendChild(subtractButton)
    if (product.productClick === 1) {
        subtractButton.disabled = true
    }
    subtractButton.addEventListener("click", () => {
        counter.innerHTML = --product.productClick
        if (product.productClick === 1) {
            subtractButton.disabled = true
        }
        showPrice.innerHTML = ` ${calculatePrice(product.productClick, product.productPrice)} TL`
        calculateTotalPrice(basketProductArray)
    })

    let counter = document.createElement("div")
    counter.classList.add("counter")
    counter.innerHTML = product.productClick
    buttons.appendChild(counter)

    let addButton = document.createElement("button")
    addButton.classList.add("addButton")
    addButton.innerHTML = "+"
    buttons.appendChild(addButton)
    addButton.addEventListener("click", () => {
        counter.innerHTML = ++product.productClick
        showPrice.innerHTML = ` ${calculatePrice(product.productClick, product.productPrice)} TL`
        subtractButton.disabled = false
        calculateTotalPrice(basketProductArray)
    })

    let showPrice = document.createElement("div")
    showPrice.classList.add("showPrice")
    showPrice.innerHTML = `${calculatePrice(product.productClick, product.productPrice)} TL`
    cartProductDiv.appendChild(showPrice)
    let trashDiv = document.createElement("div")
    trashDiv.classList.add("trashDiv")

    let trashImg = document.createElement("img")
    trashImg.classList.add("trash")
    trashImg.src = "../icons/trash.png"
    trashDiv.appendChild(trashImg)
    trashDiv.addEventListener("click", () => removeProduct(product.productId, product.productName))
    cartProductDiv.appendChild(trashDiv)
}

function calculateTotalPrice(array) {
    let freeCargoDom = document.querySelector(".freeCargoDom")
    let cargoPrice = document.querySelector(".cargoPrice")
    let cargo = 19.99
    cargoPrice.innerHTML = `${cargo} TL`
    let productTotalDom = document.querySelector("#productTotal")
    let totalCargoAndProductPrice = document.querySelector(".totalPrice")
    let totalPrice = 0
    array.forEach(item => {
        totalPrice += (item.productPrice * item.productClick)
    })
    if (totalPrice >= 100) {
        cargo = 0
        cargoPrice.style.textDecoration = "line-through";
        freeCargoDom.style.display = "flex"
        freeCargoDom.innerHTML = "100TL ve üzeri kargo bedava !"
        freeCargoDom.style.color = "#88b916"
    } else if ((totalPrice + cargo) < 50) {
        document.querySelectorAll(".confirmBasket").forEach(item => {
            item.classList.add("disabledButton")
        })
        freeCargoDom.style.display = "flex"
        freeCargoDom.innerHTML = `Minimum sepet tutarı 50TL olmalıdır. <span> ${Number(parseFloat(50 - (totalPrice + cargo)).toFixed(2))} TL'lik ürün ekleyin ! </span>`
        freeCargoDom.style.color = "red"
    } else {
        document.querySelectorAll(".confirmBasket").forEach(item => {
            item.classList.remove("disabledButton")
        })
        document.querySelector(".freeCargoDom").style.display = "none"
        cargoPrice.style.textDecoration = "none";
    }
    productTotalDom.innerHTML = `${Number(parseFloat(totalPrice).toFixed(2))} TL`
    totalCargoAndProductPrice.innerHTML = `${Number(parseFloat(totalPrice + cargo).toFixed(2))} TL`
}


function calculatePrice(productClick, productPrice) {
    return Number(parseFloat(productPrice * productClick).toFixed(2))
}

function removeProduct(productId, productName) {
    if (confirm(`${productName} adlı ürün silinecek emin misiniz ?`)) {
        const productIndex = basketProductArray.findIndex(function (product) {
            return product.productId === productId;
        })
        basketProductArray.splice(productIndex, 1);

        // Sepeti güncelle
        localStorage.setItem('productId', JSON.stringify(basketProductArray));

        window.location.href = "../BasketPage/basket.html"
    } else {
        // Silme işlemi iptal edildi
    }
}

function checkEmpty(array) {

    if (array.length <= 0) {
        cartProducts.classList.add("emptyBasket")
        let container = document.querySelector(".container")
        //basket yani sepetionayla kısmını kaldırdık
        let basket = document.querySelector("#basket")
        basket.style.display = "none"
        //3 farklı elemen oluşturduk sırasıyla icon span ve button
        let basketIcon = document.createElement("img")
        let emptyMessage = document.createElement("span")
        let startShopping = document.createElement("button")
        //Soldaki sepet iconu
        basketIcon.src = "../icons/basketicon.png"
        cartProducts.appendChild(basketIcon)
        //Sepet Boş yazısı ortada
        emptyMessage.innerHTML = "Sepetinde ürün bulunmamaktadır."
        cartProducts.appendChild(emptyMessage)
        //Turuncu alışverişe başla butonu
        startShopping.classList.add("startShoppingButton")
        startShopping.innerHTML = "Alışverişe Başla"
        container.style.justifyContent = "center"
        cartProducts.appendChild(startShopping)
        //butona tıklandığında ürünlerim sayfasına yönlendir
        startShopping.addEventListener("click", () => {
            window.location.href = "../ProductsPage/products.html"
        })

    } else {
        let basketDiv = document.createElement("div")
        let showCount = document.createElement("span")
        basketDiv.classList.add("basketFont")
        showCount.classList.add("showCount")
        showCount.innerHTML = `Sepetim (${basketProductArray.length} Ürün)`
        basketDiv.appendChild(showCount)
        cartProducts.appendChild(basketDiv)
    }
}

let result = localStorage.getItem("responseJson")
let responseJson = JSON.parse(result);
let issuccess1Button = document.querySelector(".issuccess1")
let issuccess2Button = document.querySelector(".issuccess2")
if (responseJson.isSuccess) {
    issuccess1Button.innerHTML = "Sepetim"
    issuccess1Button.href = "../BasketPage/basket.html"
    issuccess2Button.innerHTML = "Çıkış Yap"
}
issuccess2Button.addEventListener("click", async () => {
    try {
        const url = "http://localhost:5025/api/authenticate/LogOut"
        localStorage.setItem("responseJson", "")
        localStorage.setItem("productId", "[]")
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8"'
            },
            body: responseJson.token
        })
        console.log(response);
    } catch {
        console.error("ERROR")
    }
})

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