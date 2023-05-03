
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
    addButton.innerHTML = "+"
    yanDİv.appendChild(addButton)
    addButton.addEventListener("click", () => {
        let productName = addButton.parentElement.parentElement.querySelector("#ürünname").textContent
        let productPrice = addButton.parentElement.parentElement.querySelector("#price").textContent
        productsObject.push(productName)
        localStorage.setItem("productNames", JSON.stringify(productsObject))
        Toastify({
            text: "Ürün Sepete Eklendi",
            duration: 3000,
            destination: "../BasketPage/basket.html",
            newWindow: true,
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
        //Sepete eklenecek  burada
        // let isThere = checkProductToAdd(productName, productPrice)
        // if (isThere) {
        //     productsObject.findIndex(item => {
        //         const cartDiv = document.querySelector('#cart');
        //         const productDiv = document.querySelector('.contents');
        //         const priceSpan = document.querySelector('.priceSpan');
        //         const countSpan = document.querySelector(".countSpan")
        //         priceSpan.textContent = parseFloat(item.price).toFixed(2);
        //         countSpan.textContent = item.count
        //         productDiv.appendChild(countSpan)
        //         productDiv.appendChild(priceSpan);
        //         cartDiv.appendChild(productDiv);
        //     });
        // }
        // else {
        //     productsObject.push({
        //         name: productName,
        //         price: parseFloat(productPrice).toFixed(2),
        //         count: 1
        //     })
        //     addProductToCart(productName, productPrice, 1)
        // }
    })

    let subtractButton = document.createElement("button")
    subtractButton.classList.add("subtract")
    subtractButton.innerHTML = "-"
    yanDİv.appendChild(subtractButton)
    subtractButton.addEventListener("click", () => {
        let productName = subtractButton.parentElement.parentElement.querySelector("#ürünname").textContent
        let productPrice = subtractButton.parentElement.parentElement.querySelector("#price").textContent
        
        //ürün eksiltilecek sepetten
        // let isThere = checkProductToSubtract(productName, productPrice)
        // if (isThere) {
        //     productsObject.findIndex(item => {
        //         const cartDiv = document.querySelector('#cart');
        //         const productDiv = document.querySelector('.contents');
        //         const priceSpan = document.querySelector('.priceSpan');
        //         const countSpan = document.querySelector(".countSpan")
        //         priceSpan.textContent = parseFloat(item.price);
        //         countSpan.textContent = item.count

        //         productDiv.appendChild(countSpan)
        //         productDiv.appendChild(priceSpan);
        //         cartDiv.appendChild(productDiv);
        //     })
        // } else {
        //     console.log("Ürün sepetinizide yok kaldiramassin");
        // }


    })

}
// sepet kısmında yapılacak
// function checkProductToSubtract(productName, productPrice) {
//     const productIndex = productsObject.findIndex(item => item.name === productName);
//     if (productIndex === -1) {
//         return false;
//     } else {
//         let item = productsObject[productIndex];
//         if (item.count == 1) {
//             // ürün sepetten silinmeli
//             const cartDiv = document.querySelector('#cart');
//             const productDiv = document.querySelector('.contents');
//             const priceSpan = document.querySelector('.priceSpan');
//             const countSpan = document.querySelector(".countSpan");
//             productDiv.removeChild(priceSpan);
//             productDiv.removeChild(countSpan);
//             cartDiv.removeChild(productDiv);
//             productsObject.splice(productIndex, 1);
//             return false;
//         } else {
//             // ürün sayısı 1 veya daha fazla ise
//             item.count--;
//             item.price = (parseFloat(productPrice) * item.count).toFixed(2);
//             return true;
//         }
//     }
// }

//sepet kısmında yapılacak
// function checkProductToAdd(productName, productPrice) {
//     const productIndex = productsObject.findIndex(item => item.name === productName);
//     if (productIndex === -1) {
//         return false
//     } else {
//         let item = productsObject[productIndex]
//         item.count++
//         const floatCount = item.count;
//         productsObject[productIndex].price = (parseFloat(productPrice) * floatCount).toFixed(2);
//         return true
//     }
// }

//sepet kısmında yapılacak
// function addProductToCart(productName, productPrice, productCount) {
//     // Ürün div'ini oluşturun
//     const productDiv = document.createElement('div');
//     productDiv.classList.add('contents');

//     // Ürün adını içeren bir span oluşturun
//     const nameSpan = document.createElement('span');
//     nameSpan.classList.add('nameSpan')
//     nameSpan.textContent = productName;
//     productDiv.appendChild(nameSpan);

//     // Ürün adedini içeren bir span oluşturun ve 1 ile başlatın
//     const countSpan = document.createElement('span');
//     countSpan.classList.add('countSpan')
//     countSpan.textContent = productCount;
//     productDiv.appendChild(countSpan);

//     // Ürün fiyatını içeren bir span oluşturun ve orijinal fiyatla başlatın
//     const priceSpan = document.createElement('span');
//     priceSpan.classList.add('priceSpan')
//     priceSpan.textContent = parseFloat(productPrice).toFixed(2);
//     productDiv.appendChild(priceSpan);

//     const cartDiv = document.querySelector('#cart');
//     cartDiv.appendChild(productDiv);
// }

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