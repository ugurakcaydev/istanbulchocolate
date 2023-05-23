//AÇILACAK BU KOD
const registerButton = document.querySelector("#registerButton")
registerButton.addEventListener("click", async (event) => {
    event.preventDefault()
    let allInputs = checkAllInputs()
    if (allInputs) {
        // const userNameValue = document.querySelector("#userName").value
        // const passwordValue = document.querySelector("#password").value
        // const againPasswordValue = document.querySelector("#againPassword").value
        // const nameValue = document.querySelector("#name").value
        // const phoneValue = document.querySelector("#phoneNumber").value
        // const emailValue = document.querySelector("#email").value
        const body = {
            username: "aaaAa",
            fullname: "aaa",
            email: "aaa@gmail.com",
            phoneNumber: "5555555555",
            gender: "diğer",
            address: "adadada",
            password: "aaaA1aA",
            confirmPassword: "aaaA1aA"
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
        // let statusValue = responseJson.status
        let messageValue = responseJson.Message
        let successValue = responseJson.isSuccess
        getToastMessage(successValue, messageValue)
        console.log(responseJson);
        // localStorage.setItem("statusValue", statusValue)
        console.log("userName = ", JSON.stringify(body.username), "fullName = ", JSON.stringify(body.fullname), "email = ", JSON.stringify(body.email), "phoneNumber = ", JSON.stringify(body.phoneNumber), "gender = ", JSON.stringify(body.gender), "adress = ", JSON.stringify(body.address), "password = ", JSON.stringify(body.password), "confirmPassword = ", JSON.stringify(body.confirmPassword))
    } else {
    }

})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const address = document.querySelector("#address")
// address.addEventListener("input", () => {
//     let value = address.value
//     let input = address
//     const regex = /^[a-zA-Z0-9üÜğĞıİşŞöÖçÇ\s\/\.\:\,\d]{15,}$/
//     const testAddress = regex.test(value)
//     if (value.length == 0) {
//         input.classList.remove("activeInput");
//         input.classList.remove("unActiveInput");
//         input.style.borderColor = "";
//     } else {
//         input.classList.remove("unActiveInput");
//         input.style.borderColor = "red";

//         if (testAddress) {
//             input.classList.add("activeInput");
//             input.style.borderColor = "";

//         } else {
//             input.classList.add("unActiveInput");
//             input.style.borderColor = "red";

//         }
//     }
// })

function checkAllInputs() {
    let resultUserName, resultPassword, resultPasswordAgain, resultName, resultNumber, resultEmail
    const Inputs = document.querySelectorAll("input")
    Inputs.forEach(input => {
        const inputId = input.id
        const inputValue = input.value
        const infoSpan = input.parentElement.querySelector(".giveInfo")
        switch (inputId) {
            case "userName":
                resultUserName = checkUserName(input, inputValue, infoSpan)
                break;
            case "password":
                resultPassword = checkPassword(input, inputValue, infoSpan)
                break;
            case "againPassword":
                resultPasswordAgain = checkAgainPassword(input, inputValue, infoSpan)
                break;
            case "name":
                resultName = checkName(input, inputValue, infoSpan)
                break;
            case "phoneNumber":
                resultNumber = checkPhoneNumber(input, inputValue, infoSpan)
                break;
            case "email":
                resultEmail = checkEmail(input, inputValue, infoSpan)
            // case "address":
            //     checkAddress(input, inputValue)
            //     break;
        }
    })
    if ((resultUserName && resultPassword && resultPasswordAgain && resultName && resultNumber && resultEmail) === true) {
        return true
    } else {
        return false
    }
}
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkUserName(input, value, infoSpan) { //en az bir büyük harf ve uzunluğu 3 veya daha fazla 
    const regex = /^(?=.*[A-Z])[A-Za-z0-9]*[A-Za-z0-9]{3,}$/
    const testUserName = regex.test(value)

    if (value.length == 0) {
        input.classList.remove("activeInput", "unActiveInput");
        infoSpan.style.color = "red"
        infoSpan.style.display = "block"
        infoSpan.textContent = "Kullanıcı adı boş bırakılamaz"
        return false
    } else {
        input.classList.toggle("activeInput", testUserName);
        infoSpan.style.color = "#88b916"
        input.classList.toggle("unActiveInput", !testUserName);
        input.style.borderColor = testUserName ? "" : "red";
        if (input.classList.contains("activeInput")) {
            infoSpan.style.color = "#88b916"
            infoSpan.style.display = ""
            return true
        } else {
            infoSpan.style.color = "red"
            infoSpan.style.display = "block"
            infoSpan.textContent = " Kullanıcı adı en az 3 harf ve bir büyük harf içermelidir."
            return false
        }

    }
}

function checkPassword(input, value, infoSpan) { // en az bir büyük harf bir sayı ve uzunluğu 5'i geçecek
    const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/
    const testPassword = regex.test(value)

    if (value.length == 0) {
        input.classList.remove("activeInput", "unActiveInput");
        infoSpan.style.color = "red"
        infoSpan.style.display = "block"
        infoSpan.textContent = "Parola boş bırakılamaz"
        return false
    } else {
        input.classList.toggle("activeInput", testPassword);
        input.classList.toggle("unActiveInput", !testPassword);
        input.style.borderColor = testPassword ? "" : "red";
        if (input.classList.contains("activeInput")) {
            infoSpan.style.color = "#88b916"
            infoSpan.style.display = ""
            return true
        } else {
            infoSpan.style.color = "red"
            infoSpan.style.display = "block"
            infoSpan.textContent = "Parola en az 5 harf,bir büyük harf ve bir sayı içermelidir"
            return false
        }
    }
}

function checkAgainPassword(input, value, infoSpan) {// password.value ile eşit olacak 
    const exPassword = document.querySelector("#password").value
    const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
    const testAgainPassword = regex.test(value);

    if (value.length === 0) {
        input.classList.remove("activeInput", "unActiveInput");
        input.style.borderColor = "";
        infoSpan.style.color = "red"
        infoSpan.style.display = "block"
        infoSpan.textContent = "ParolaTekrarı boş bırakılamaz"
        return false
    } else {
        input.classList.toggle("activeInput", testAgainPassword && exPassword === value);
        input.classList.toggle("unActiveInput", !testAgainPassword || exPassword !== value);
        if (input.classList.contains("activeInput")) {
            infoSpan.style.color = "#88b916"
            infoSpan.style.display = ""
            return true
        } else {
            infoSpan.style.color = "red"
            infoSpan.style.display = "block"
            infoSpan.textContent = "Parolalar Eşleşmiyor"
            return false
        }
    }
}

function checkName(input, value, infoSpan) { // sadece büyük harf ve küçük harf ve en az 3 karakter kabul 
    const regex = /^[a-zA-ZüÜğĞıİşŞöÖçÇ\s]{3,}$/
    const testName = regex.test(value)
    if (value.length == 0) {
        input.classList.remove("activeInput", "unActiveInput");
        infoSpan.style.color = "red"
        infoSpan.style.display = "block"
        infoSpan.textContent = "İsim boş bırakılamaz"
        return false
    } else {
        if (testName) {
            input.classList.add("activeInput");
            input.classList.remove("unActiveInput");
            infoSpan.style.color = "#88b916";
            infoSpan.style.display = ""
            return true
        } else {
            input.classList.add("unActiveInput");
            input.classList.remove("activeInput");
            infoSpan.style.color = "red";
            infoSpan.style.display = "block"
            infoSpan.textContent = "İsim en az 3 harf olmalıdır."
            return false
        }
    }
}

function checkPhoneNumber(input, value, infoSpan) { // bu sıkıntılı bakılacak
    value = value.replace(/\D/g, "");
    // sadece sayılardan oluşan bir string yap
    if (value.length == 0) {
        input.classList.remove("activeInput", "unActiveInput");
        infoSpan.style.color = "red"
        infoSpan.style.display = "block"
        infoSpan.textContent = "Telefon numarası boş bırakılamaz"
        return false
    } else {
        if (value.length == 10) {
            input.classList.add("activeInput");
            input.classList.remove("unActiveInput");
            infoSpan.style.color = "#88b916";
            infoSpan.style.display = ""
            return true
        } else {
            input.classList.add("unActiveInput");
            input.classList.remove("activeInput");
            infoSpan.style.color = "red";
            infoSpan.style.display = "block"
            infoSpan.textContent = "Telefon numarası 10 haneli olmalıdır."
            return false
        }
    }
    // let formattedNumber = "";
    // for (let i = 0; i < value.length && i < 10; i++) {
    //     if (i === 3 || i === 6 || i === 8) {
    //         formattedNumber += " ";
    //     }
    //     formattedNumber += value[i];
    // }
    // input.value = formattedNumber;
    // if (value.length > 10) {
    //     input.value = formattedNumber.substring(0, 13);
    // }
    // console.log(value.length);
    // if (value.length == 0) {
    //     input.classList.remove("activeInput", "unActiveInput");
    //     input.style.borderColor = ""
    //     infoSpan.style.display = "block"
    //     infoSpan.style.color = "red";
    //     infoSpan.textContent = "Telefon numarası boş bırakılamaz"
    //     return false

    // } else {
    //     input.classList.remove("unActiveInput");
    //     input.style.borderColor = "red";
    //     infoSpan.style.color = "red";
    //     infoSpan.style.display = "block"

    //     if (value.length == 10) {
    //         input.classList.add("activeInput");
    //         input.style.borderColor = "#88b916";
    //         infoSpan.style.display = ""
    //         return true

    //     } else {
    //         input.classList.add("unActiveInput");
    //         input.style.borderColor = "red";
    //         infoSpan.style.color = "red";
    //         infoSpan.style.display = "block"
    //         infoSpan.textContent = "Telefon numarası 10 haneli olmalıdır"
    //         return false
    //     }
    // }
}

function checkEmail(input, value, infoSpan) {
    value = value.trim();
    const domain = value.slice(value.indexOf("@") + 1);
    const regex = /^[^\s@]+@[^\s@]+\.[a-z]{3}$/i
    const testEmail = regex.test(value)
    if (value === '') {
        input.style.borderColor = '';
        infoSpan.style.color = "red"
        infoSpan.style.display = "block"
        infoSpan.textContent = "E-mail boş bırakılamaz"
        return false
    } else if ((testEmail && domain == "hotmail.com") || (testEmail && domain == "gmail.com")) {
        input.style.borderColor = '#88b916';
        infoSpan.style.display = ""
        infoSpan.style.color = "#88b916";
        return true
    } else {
        infoSpan.style.color = "red";
        input.style.borderColor = 'red';
        infoSpan.style.display = "block"
        infoSpan.textContent = "Geçersiz E-mail"
        return false
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

function getToastMessage(boolean, message) {
    if (boolean) {
        Toastify({
            text: `${message}`,
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
            text: `${message}`,
            // duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, rgb(255,95,109),rgb(255,195,113))",
            },
            onClick: function gonder() { } // Callback after click
        }).showToast();
    }
}