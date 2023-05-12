async function checkusers(name_id, password_id) {

    var valuename = document.getElementById(name_id).value
    var valuepassword = document.getElementById(password_id).value
    const body = {
        username: "kadir311",
        password: "taner311A@"
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
    let checkSuccess = responseJson.isSuccess
    // let token = JSON.parse(localStorage.getItem("responseJson"))
    // let expiration = JSON.parse(localStorage.getItem("responseJson")).expiration
    // let isSuccess = JSON.parse(localStorage.getItem("responseJson")).isSuccess
    if (checkSuccess) {
        //kullanıcı varsa yapılıcak işlemler
        getToastMessage(checkSuccess)
        //  window.location.href = "../HomePage/home.html";

    } else {
        //kullanıcı yoksa yapılacak işlemler
        getToastMessage(checkSuccess)

    }
}

function getToastMessage(boolean) {
    if (boolean) {
        Toastify({
            text: "Login successful",
            className: "info",
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            close: true,
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, rgb(0,176,155),rgb(150,201,61))",
            }
        }).showToast();
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
    if (x.type == "password") {
        x.type = "text";
        el.src = "/icons/1.png"
    } else {
        x.type = "password";
        el.src = "/icons/2.png"
    }
}

var typingEffect = new Typed(".multiText", {
    strings: ["The first step for Istanbul Chocolates to become one of the biggest brands in Turkey's cocoa, chocolate and confectionery sector is taken with its first store in Beyoğlu. With more than 200 product types, classic varieties such as madlens, specialties, dragees, special day chocolates and gift baskets, the company's six city stores, five stores in major metropolitan airports and a small mail order branch in Beyoğlu lead the sector. The first store is a very important step. Because this first store in Beyoğlu is the first place where sweet lovers and Istanbul Chocolates meet."],
    loop: false,
    typeSpeed: 40,
})

function clickbuton() {
    var mybuton = document.querySelector('.login-Button');
    mybuton.style.transition = "transform 0.08s ease-in-out";

    mybuton.addEventListener('mousedown', function () {
        mybuton.style.transform = 'scale(0.86)';
    });

    mybuton.addEventListener('mouseup', function () {
        mybuton.style.transform = 'scale(1)';
    });
}