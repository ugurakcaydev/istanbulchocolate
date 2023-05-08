

async function gonder(name_id, password_id, email_id) {

    // var valuename = document.getElementById(name_id).value
    // var valuepassword = document.getElementById(password_id).value
    // var valueemail = document.getElementById(email_id).value
    const body = {
        username: "kado",
        email: "taner@gmail.com",
        password: "t"
    }
    const response = await fetch("http://localhost:5025/api/authenticate/registeradmin", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8"'
        },
        body: JSON.stringify(body)
    })
    const responseJson = await response.json()
    let statusValue = responseJson.status
    let messageValue = responseJson.message
    let successValue = responseJson.isSuccess
    // console.log(statusValue);
    // // localStorage.setItem("statusValue", statusValue)
    // console.log(responseJson)
    // console.log("name = ", JSON.stringify(body.username), "email = ", JSON.stringify(body.email), "password = ", JSON.stringify(body.password))
}

// function checkRegister(isSuccess, message) {
//     if (isSuccess) {
//         //kayıt başarılı
//     } else {
//         if (message === "User already exists !") {
//             //toast message mesajı yaz
//         } else if (message === "User creation failed! Please check user details and try again. please !") {
//             //tek tek check edilicek parolar mail ve username check et
//         }
//     }
// }

function clickbuton() {
    var mybuton = document.querySelector('.button');
    mybuton.style.transition = "transform 0.08s ease-in-out";

    mybuton.addEventListener('mousedown', function () {
        mybuton.style.transform = 'scale(0.86)';


    });

    mybuton.addEventListener('mouseup', function () {
        mybuton.style.transform = 'scale(1)';

    });
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