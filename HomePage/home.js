let result = localStorage.getItem("responseJson")
let responseJson = JSON.parse(result);
let issuccess1Button = document.querySelector(".issuccess1")
let issuccess2Button = document.querySelector(".issuccess2")
if (responseJson.isSuccess) {
    issuccess1Button.innerHTML = "Sepetim"
    issuccess1Button.href = "../BasketPage/basket.html"
    issuccess2Button.innerHTML = "Çıkış Yap"
}


// const swiper = new Swiper('.swiper', {
//     autoplay: {
//         delay: 10000,
//         disableOnInteraction: false,
//     },
//     loop: false,

//     pagination: {
//         el: '.swiper-pagination',
//     },

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]
// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')

// })
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
