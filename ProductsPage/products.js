
let products = document.querySelector(".products")
let productsObject = []
const getProduct = async () => {
    try {
        const response = await fetch("http://localhost:5025/api/Product/GetProduct", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8"'
            },
        });
        const data = await response.json();
        data.forEach(item => {
            productsObject.productId = item.productId
            productsObject.productNames = item.productName
            productsObject.productPrice = item.price
            addProduct(item);
        });
    } catch (error) {
        console.error('Hata:', error);
    }
};
getProduct();

function addProduct(item) {
    let anadiv = document.createElement("div")
    anadiv.classList.add("anadiv")
    products.appendChild(anadiv)

    let fotoDİv = document.createElement("div")
    fotoDİv.classList.add("fotodiv")
    fotoDİv.innerHTML = item.productId
    anadiv.appendChild(fotoDİv)

    let yaziDİv = document.createElement("div")
    yaziDİv.classList.add("yazılardiv")
    anadiv.appendChild(yaziDİv)

    let productName = document.createElement("span")
    productName.id = "ürünname"
    productName.innerHTML = item.productName
    yaziDİv.appendChild(productName)

    let productPrice = document.createElement("span")
    productPrice.id = "price"
    productPrice.innerHTML = item.price + " TL"
    yaziDİv.appendChild(productPrice)

    let yanDİv = document.createElement("div")
    yanDİv.classList.add("yandiv")
    anadiv.appendChild(yanDİv)

    let addButton = document.createElement("button")
    addButton.classList.add("add")
    let basketImg = document.createElement("img")
    basketImg.src = "../icons/add-to-basket.png"
    addButton.appendChild(basketImg)
    yanDİv.appendChild(addButton)

    addButton.style.transition = "transform 0.1s ease";
    addButton.addEventListener("mousedown", () => {
        addButton.style.transform = 'scale(0.96)';
    })
    addButton.addEventListener("mouseup", () => {
        addButton.style.transform = 'scale(1)';
    })
    addButton.addEventListener("click", () => {
        let productName = addButton.parentElement.parentElement.querySelector("#ürünname").textContent
        let productPrice = addButton.parentElement.parentElement.querySelector("#price").textContent
        let productId = addButton.parentElement.parentElement.querySelector(".fotodiv").textContent
        let floatPrice = parseFloat(productPrice)
        let intId = parseInt(productId)
        addProductToObject(intId, productName, floatPrice)
        addToastMessage()
    })
}

function addProductToObject(productId, productName, productPrice) {
    const existingProduct = productsObject.find(product => product.productId === productId);
    if (existingProduct) {
        ++existingProduct.productClick
        console.log(existingProduct)
    } else {
        const newProduct = {
            productId: productId,
            productName: productName,
            productPrice: productPrice,
            productClick: 1
        };
        productsObject.push(newProduct);
        console.log(newProduct);
    }
    localStorage.setItem("productId", JSON.stringify(productsObject))
}

function addToastMessage() {
    Toastify({
        text: "Ürün Sepete Eklendi",
        duration: 3000,
        destination: "../BasketPage/basket.html",
        // newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {
        } // Callback after click
    }).showToast();
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

