let result = localStorage.getItem("responseJson")
let responseJson = JSON.parse(result);
let issuccess1Button = document.querySelector(".issuccess1")
let issuccess2Button = document.querySelector(".issuccess2")
if (responseJson.isSuccess) {
    issuccess1Button.innerHTML = "Sepetim"
    issuccess1Button.href = "../BasketPage/basket.html"
    issuccess2Button.innerHTML = "Çıkış Yap"
}
issuccess2Button.addEventListener("click", async () => {
    try {
        const url = "http://localhost:5025/api/authenticate/LogOut"
        localStorage.setItem("responseJson", "")
        localStorage.setItem("productId", "[]")
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8"'
            },
            body: responseJson.token
        })
        console.log(response);
    } catch {
        console.error("ERROR")
    }
})

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
