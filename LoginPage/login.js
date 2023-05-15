const loginButton = document.querySelector("#loginButton")

loginButton.addEventListener("click", async (event) => {
    // var valuename = document.getElementById(name_id).value
    // var valuepassword = document.getElementById(password_id).value
    // let token = JSON.parse(localStorage.getItem("responseJson"))
    event.preventDefault();
    const body = {
        username: "aaaAa",
        password: "aaaA1aA"
    }
    const url = "http://localhost:5025/api/authenticate/login"
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8"'
        },
        body: JSON.stringify(body)
    })
    const responseJson = await response.json()
    localStorage.setItem("responseJson", JSON.stringify(responseJson))
    console.log(responseJson.token);
    let token = responseJson.token
    // let expiration = JSON.parse(localStorage.getItem("responseJson")).expiration
    // let isSuccess = JSON.parse(localStorage.getItem("responseJson")).isSuccess
    if (token) {
        //kullanıcı varsa yapılıcak işlemler
        getToastMessage(token)
        //  window.location.href = "../HomePage/home.html";

    } else {
        //kullanıcı yoksa yapılacak işlemler
        getToastMessage(token)

    }
})

// async function checkusers(/*name_id, password_id*/event) {

// }

function getToastMessage(boolean) {
    if (boolean) {
        Toastify({
            text: "Login successful",
            destination: "../HomePage/home.html",
            newWindow: true,
            className: "info",
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            close: true,
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, rgb(0,176,155),rgb(150,201,61))",
            }
        }).showToast();
         window.location.href = "../HomePage/home.html"
    } else {
        Toastify({
            text: "Username or password is wrong",
            // duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, rgb(255,95,109),rgb(255,195,113))",
            },
            onClick: function gonder() { } // Callback after click
        }).showToast();
    }
}

function showPassword(id, el) {
    let x = document.getElementById(id)
    console.log(x.type);
    if (x.type == "password") {
        x.type = "text";
        el.src = "../icons/1.png"
    } else {
        x.type = "password";
        el.src = "../icons/2.png"
    }
}

var typingEffect = new Typed(".multiText", {
    strings: [" İstanbul Çikolataları, Türkiye'nin önde gelen çikolata üreticilerinden biridir. Şirketin kökeni, 1976 yılına dayanmaktadır.O dönemlerde İstanbul'un küçük bir çikolata üreticisi olan İstanbul Çikolataları, kaliteli ürünleriyle kısa sürede müşterilerin gözdesi haline gelmiştir.Şirket, zamanla üretimini genişletmiş, ürün yelpazesini zenginleştirmiş ve yenilikçi ürünler sunmaya başlamıştır.Günümüzde ."],
    loop: false,
    typeSpeed: 40,
})

// function clickbuton() {
//     var mybuton = document.querySelector('.login-Button');
//     mybuton.style.transition = "transform 0.08s ease-in-out";

//     mybuton.addEventListener('mousedown', function () {
//         mybuton.style.transform = 'scale(0.86)';
//     });

//     mybuton.addEventListener('mouseup', function () {
//         mybuton.style.transform = 'scale(1)';
//     });
// }