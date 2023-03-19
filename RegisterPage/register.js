function showPassword(id, el) {
    let x = document.getElementById(id)
    if (x.type == "password") {
        x.type = "text";
        el.src = "../LoginPage/icons/1.png"
    } else {
        x.type = "password";
        el.src = "../LoginPage/icons/2.png"
    }
}