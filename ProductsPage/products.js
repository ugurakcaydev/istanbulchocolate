
let result = localStorage.getItem("responseJson")
let responseJson = JSON.parse(result);
console.log(responseJson);
let issuccessButton = document.querySelector(".issuccess2")
if (responseJson.isSuccess) {
    issuccessButton.innerHTML = "Çıkış Yap"
}
issuccessButton.addEventListener("click", async (event) => {
    try {
        if (responseJson.isSuccess) {
            var result = confirm("Siteden Çıkılsın mı ?")
            if (result) {
                const url = "http://localhost:5025/api/authenticate/LogOut"
                localStorage.setItem("Cart", "[]")
                responseJson.isSuccess = false
                var updatedResponse = JSON.stringify(responseJson)
                localStorage.setItem("responseJson", updatedResponse);
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'token': responseJson.token,
                        'Content-Type': 'application/json;charset=UTF-8"'
                    },
                })
                const responseData = await response.json(); // Yanıtı JSON olarak almak için

            } else {
                event.preventDefault()
            }
        }
    } catch {
        console.error("ERROR")
    }
})

let products = document.querySelector(".products")
let productsObject = []
const getProduct = async () => {
    try {
        const response = await fetch("http://localhost:5025/api/Product/GetAllProduct", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8"'
            },
        });
        const data = await response.json();

        data.forEach(item => {
            productsObject.productImage = `../images/${item.ProductName}.png`
            productsObject.productNames = item.ProductName
            productsObject.productPrice = item.Price
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
    let productImg = document.createElement("img")
    productImg.classList.add("productImg")
    productImg.src = productsObject.productImage
    fotoDİv.appendChild(productImg)
    anadiv.appendChild(fotoDİv)

    let yaziDİv = document.createElement("div")
    yaziDİv.classList.add("yazılardiv")
    anadiv.appendChild(yaziDİv)

    let productName = document.createElement("span")
    productName.id = "ürünname"
    productName.innerHTML = item.ProductName
    yaziDİv.appendChild(productName)

    let productPrice = document.createElement("span")
    productPrice.id = "price"
    productPrice.innerHTML = item.Price + " TL"
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

    addButton.addEventListener("click", () => {
        let productName = addButton.parentElement.parentElement.querySelector("#ürünname").textContent
        let productPrice = addButton.parentElement.parentElement.querySelector("#price").textContent
        let productImage = addButton.parentElement.parentElement.querySelector(".productImg").src
        let floatPrice = parseFloat(productPrice)
        addProductToObject(productName, floatPrice, productImage)
    })

    addButton.style.transition = "transform 0.1s ease";
    addButton.addEventListener("mousedown", () => {
        addButton.style.transform = 'scale(0.96)';
    })
    addButton.addEventListener("mouseup", () => {
        addButton.style.transform = 'scale(1)';
    })

}

function addProductToObject(productName, productPrice, productImage) {
    let currentCart = JSON.parse(localStorage.getItem("Cart"))
    const existingProduct = currentCart.find(product => product.productName === productName);
    if (existingProduct) {
        ++existingProduct.productClick
        addToastMessage(existingProduct)
    } else {
        const newProduct = {
            productName: productName,
            productPrice: productPrice,
            productImage: productImage,
            productClick: 1
        };
        currentCart.push(newProduct);
        addToastMessage(newProduct)
    }
    localStorage.setItem("Cart", JSON.stringify(currentCart))
}

function addToastMessage(array) {
    console.log(array);
    Toastify({
        text: ` (${array.productClick}) tane ${array.productName} sepete eklendi`,
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

