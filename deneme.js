function clickbuton() {
    var mybuton = document.querySelectorAll('.login-Button', 'register-Button');
    mybuton.style.transition = "transform 0.08s ease-in-out";

    mybuton.addEventListener('mousedown', function () {
        mybuton.style.transform = 'scale(0.86)';
    });

    mybuton.addEventListener('mouseup', function () {
        mybuton.style.transform = 'scale(1)';
    });
}

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-Bar");
    navBar.classList.toggle("active");
}

let buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", clickbuton)
    console.log("aaa");
})
