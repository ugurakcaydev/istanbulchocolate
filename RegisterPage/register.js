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

async function gonder(name_id, password_id, email_id) {

    var valuename = document.getElementById(name_id).value
    var valuepassword = document.getElementById(password_id).value
    var valueemail = document.getElementById(email_id).value
    const body = {
        username: "taner",
        email: "taner@gmail.com",
        password: "taner1@"
    }
    const response = await fetch("http://localhost:5025/api/authenticate/register", {
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
    console.log(responseJson)
    console.log("name = ", JSON.stringify(body.username), "email = ", JSON.stringify(body.email), "password = ", JSON.stringify(body.password))
}

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