//AÇILACAK BU KOD
// const registerButton = document.querySelector("#registerButton")
// registerButton.addEventListener("click", async () => {
//     // const userNameValue = document.querySelector("#userName").value
//     // const passwordValue = document.querySelector("#password").value
//     // const againPasswordValue = document.querySelector("#againPassword").value
//     // const nameValue = document.querySelector("#name").value
//     // const phoneValue = document.querySelector("#phoneNumber").value
//     // const emailValue = document.querySelector("#email").value

//     const body = {
//         username: "aaaAa",
//         fullname: "aaa",
//         email: "aaa@gmail.com",
//         phoneNumber: "5555555555",
//         gender: "diğer",
//         address: "adadada",
//         password: "aaaA1aA",
//         confirmPassword: "aaaA1aA"
//     }
//     const response = await fetch("http://localhost:5025/api/authenticate/registeradmin", {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json;charset=UTF-8"'
//         },
//         body: JSON.stringify(body)
//     })
//     const responseJson = await response.json()
//     let statusValue = responseJson.status
//     let messageValue = responseJson.message
//     let successValue = responseJson.isSuccess
//     console.log(statusValue);
//     // localStorage.setItem("statusValue", statusValue)
//     console.log(responseJson)
//     console.log("userName = ", JSON.stringify(body.username), "fullName = ", JSON.stringify(body.fullname), "email = ", JSON.stringify(body.email), "phoneNumber = ", JSON.stringify(body.phoneNumber), "gender = ", JSON.stringify(body.gender), "adress = ", JSON.stringify(body.address), "password = ", JSON.stringify(body.password), "confirmPassword = ", JSON.stringify(body.confirmPassword))
// })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async function register(name_id, password_id, email_id) {
//     // var valuename = document.getElementById(name_id).value
//     // var valuepassword = document.getElementById(password_id).value
//     // var valueemail = document.getElementById(email_id).value
//     const body = {
//         username: "kado",
//         email: "taner@gmail.com",
//         password: "t"
//     }
//     const response = await fetch("http://localhost:5025/api/authenticate/registeradmin", {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json;charset=UTF-8"'
//         },
//         body: JSON.stringify(body)
//     })
//     const responseJson = await response.json()
//     let statusValue = responseJson.status
//     let messageValue = responseJson.message
//     let successValue = responseJson.isSuccess
//     // console.log(statusValue);
//     // // localStorage.setItem("statusValue", statusValue)
//     // console.log(responseJson)
//     // console.log("name = ", JSON.stringify(body.username), "email = ", JSON.stringify(body.email), "password = ", JSON.stringify(body.password))
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const address = document.querySelector("#address")
address.addEventListener("input", () => {
    let value = address.value
    let input = address
    const regex = /^[a-zA-Z0-9üÜğĞıİşŞöÖçÇ\s\/\.\:\,\d]{15,}$/
    const testAddress = regex.test(value)
    if (value.length == 0) {
        input.classList.remove("activeInput");
        input.classList.remove("unActiveInput");
        input.style.borderColor = "";
    } else {
        input.classList.remove("unActiveInput");
        input.style.borderColor = "red";

        if (testAddress) {
            input.classList.add("activeInput");
            input.style.borderColor = "";

        } else {
            input.classList.add("unActiveInput");
            input.style.borderColor = "red";

        }
    }
})

const Inputs = document.querySelectorAll("input")
Inputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputId = input.id
        const inputValue = input.value
        const infoSpan = input.parentElement.querySelector(".giveInfo")
        switch (inputId) {
            case "userName":
                checkUserName(input, inputValue, infoSpan)
                break;
            case "password":
                checkPassword(input, inputValue, infoSpan)
                break;
            case "againPassword":
                checkAgainPassword(input, inputValue)
                break;
            case "name":
                checkName(input, inputValue, infoSpan)
                break;
            case "phoneNumber":
                checkPhoneNumber(input, inputValue)
                break;
            case "email":
                checkEmail(input, inputValue)
                break;
            case "address":
                checkAddress(input, inputValue)
                break;
        }
    })
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkUserName(input, value, infoSpan) { //en az bir büyük harf ve uzunluğu 3 veya daha fazla 
    const regex = /^(?=.*[A-Z])[A-Za-z0-9]*[A-Za-z0-9]{3,}$/
    const testUserName = regex.test(value)

    if (value.length == 0) {
        input.classList.remove("activeInput", "unActiveInput");
        input.style.borderColor = "";
        infoSpan.style.color = "";
    } else {
        input.classList.toggle("activeInput", testUserName);
        infoSpan.style.color = "#88b916"
        input.classList.toggle("unActiveInput", !testUserName);
        input.style.borderColor = testUserName ? "" : "red";
        infoSpan.style.color = input.classList.contains("activeInput") ? "#88b916" : "red";
    }
}

function checkPassword(input, value, infoSpan) { // en az bir büyük harf bir sayı ve uzunluğu 5'i geçecek
    const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/
    const testPassword = regex.test(value)
    if (value.length == 0) {
        input.classList.remove("activeInput", "unActiveInput");
        input.style.borderColor = "";
        infoSpan.style.color = "";
    } else {
        input.classList.toggle("activeInput", testPassword);
        input.classList.toggle("unActiveInput", !testPassword);
        input.style.borderColor = testPassword ? "" : "red";
        infoSpan.style.color = input.classList.contains("activeInput") ? "#88b916" : "red";
    }
}

function checkAgainPassword(input, value) {// password.value ile eşit olacak 
    const exPassword = document.querySelector("#password").value
    const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
    const testAgainPassword = regex.test(value);

    if (value.length === 0) {
        input.classList.remove("activeInput", "unActiveInput");
        input.style.borderColor = "";
    } else {
        input.classList.toggle("activeInput", testAgainPassword && exPassword === value);
        input.classList.toggle("unActiveInput", !testAgainPassword || exPassword !== value);
    }
}

function checkName(input, value, infoSpan) { // sadece büyük harf ve küçük harf ve en az 3 karakter kabul 
    const regex = /^[a-zA-ZüÜğĞıİşŞöÖçÇ\s]{3,}$/
    const testName = regex.test(value)
    if (value.length == 0) {
        input.classList.remove("activeInput");
        input.classList.remove("unActiveInput");
        input.style.borderColor = "";
        infoSpan.style.color = "";
    } else {
        input.classList.remove("unActiveInput");
        input.style.borderColor = "red";

        if (testName) {
            input.classList.add("activeInput");
            input.style.borderColor = "";
            infoSpan.style.color = "#88b916";
        } else {
            input.classList.add("unActiveInput");
            input.style.borderColor = "red";
            infoSpan.style.color = "red";
        }
    }
}

function checkPhoneNumber(input, value) { // bu sıkıntılı bakılacak
    value = value.replace(/\D/g, "");
    // sadece sayılardan oluşan bir string yap
    let formattedNumber = "";
    for (let i = 0; i < value.length && i < 10; i++) {
        if (i === 3 || i === 6 || i === 8) {
            formattedNumber += " ";
        }
        formattedNumber += value[i];
    }
    input.value = formattedNumber;
    if (value.length > 10) {
        input.value = formattedNumber.substring(0, 13);
    }
    if (value.length == 0) {
        input.classList.remove("activeInput");
        input.classList.remove("unActiveInput");
        input.style.borderColor = "";

    } else {
        input.classList.remove("unActiveInput");
        input.style.borderColor = "red";

        if (value.length >= 10) {
            input.classList.add("activeInput");
            input.style.borderColor = "";

        } else {
            input.classList.add("unActiveInput");
            input.style.borderColor = "red";

        }
    }
}

function checkEmail(input, value) {
    value = value.trim();
    const domain = value.slice(value.indexOf("@") + 1);
    const regex = /^[^\s@]+@[^\s@]+\.[a-z]{3}$/i
    const testEmail = regex.test(value)
    if (value === '') {
        input.style.borderColor = '';
    } else if ((testEmail && domain == "hotmail.com") || (testEmail && domain == "gmail.com")) {
        input.style.borderColor = '#88b916';
    } else {
        input.style.borderColor = 'red';
    }
}

function checkAddress(input, value) {
    console.log(value);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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