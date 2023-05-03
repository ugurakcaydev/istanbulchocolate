let storedProductNames = localStorage.getItem("productNames")

let productNames = storedProductNames ? JSON.parse(storedProductNames) : [];
console.log(productNames);



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
