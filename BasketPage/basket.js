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
    trashDiv.addEventListener("click", () => removeProduct(product.productId))
    cartProductDiv.appendChild(trashDiv)
}

// function Basket() {
//     let result = calculateTotalPrice(basketProductArray)
//     console.log(result);
//     let cargoPrice = 19.99
//     let basket = document.querySelector("#basket")
//     //butonu oluşturuyoruz
//     let confirmButton = document.createElement("button")
//     confirmButton.classList.add("confirmBasket")
//     confirmButton.innerHTML = "Sepeti Onayla"
//     basket.appendChild(confirmButton)
//     //orta kısmı oluşturuyoruz
//     let orderDom = document.createElement("div")
//     orderDom.classList.add("orderSummary")
//     //orta kısmın içini yapıyoruz
//     let h3Dom = document.createElement("h3")
//     h3Dom.innerHTML = "Sipariş Özeti"
//     orderDom.appendChild(h3Dom)
//     let totalPriceDom = document.createElement("div")
//     totalPriceDom.classList.add("totalProduct")
//     let stringTotal = document.createElement("p")
//     stringTotal.innerHTML = "Ürünün Toplamı"
//     totalPriceDom.appendChild(stringTotal)
//     let totalPricePrint = document.createElement("p")
//     totalPricePrint.innerHTML = `${result} TL`
//     totalPriceDom.appendChild(totalPricePrint)
//     orderDom.appendChild(totalPriceDom)
//     //kargo total'e geçiyoruz
//     let totalCargoDom = document.createElement("div")
//     totalCargoDom.classList.add("cargoTotal")
//     let stringCargo = document.createElement("p")
//     stringCargo.innerHTML = "Kargo Toplamı"
//     totalCargoDom.appendChild(stringCargo)
//     let totalCargoPrint = document.createElement("p")
//     totalCargoPrint.innerHTML = `${cargoPrice} TL`
//     totalCargoDom.appendChild(totalCargoPrint)
//     orderDom.appendChild(totalCargoDom)
//     //kargo + ürün
//     let totalCargoProductPriceDom = document.createElement("div")
//     totalCargoProductPriceDom.classList.add("totalPrice")
//     totalCargoProductPriceDom.innerHTML

//     // basket.appendChild(orderDom)
//     //indirim kuponu kısmına geçiyoruz
//     let discountCode = document.createElement("div")
//     discountCode.classList.add("discountCode")
//     let imgDom = document.createElement("img")
//     imgDom.src = "../icons/plus.png"
//     discountCode.textContent = "İndirim Kodu Gir"
//     discountCode.appendChild(imgDom)
//     basket.appendChild(discountCode)

//     let confirmButton2 = document.createElement("button")
//     confirmButton2.classList.add("confirmBasket")
//     confirmButton2.innerHTML = "Sepeti Onayla"
//     basket.appendChild(confirmButton2)

// }


function calculateTotalPrice(array) {
    let productTotalDom = document.querySelector("#productTotal")
    let totalCargoAndProductPrice = document.querySelector(".totalPrice")
    let totalPrice = 0
    array.forEach(item => {
        totalPrice += (item.productPrice * item.productClick)
    })
    productTotalDom.innerHTML = `${Number(parseFloat(totalPrice).toFixed(2))} TL`
    totalCargoAndProductPrice.innerHTML = `${Number(parseFloat(totalPrice + 19.99).toFixed(2))} TL`
}


function calculatePrice(productClick, productPrice) {
    return Number(parseFloat(productPrice * productClick).toFixed(2))
}

function removeProduct(productId) {
    const productIndex = basketProductArray.findIndex(function (product) {
        return product.productId === productId;
    })
    basketProductArray.splice(productIndex, 1);

    // Sepeti güncelle
    localStorage.setItem('productId', JSON.stringify(basketProductArray));
    window.location.href = "../BasketPage/basket.html"
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
