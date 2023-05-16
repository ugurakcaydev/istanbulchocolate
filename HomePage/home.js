let result = localStorage.getItem("responseJson")
let responseJson = JSON.parse(result);
let issuccessButton = document.querySelector(".issuccess2")
if (responseJson.isSuccess) {
    issuccessButton.innerHTML = "Çıkış Yap"
}
issuccessButton.addEventListener("click", async (event) => {
    try {
        if (responseJson.isSuccess) {
            var result = confirm("Siteden Çıkılsın mı ?")
            if (result) {
                const url = "http://localhost:5025/api/authenticate/LogOut"
                localStorage.setItem("Cart", "[]")
                responseJson.isSuccess = false
                var updatedResponse = JSON.stringify(responseJson)
                localStorage.setItem("responseJson", updatedResponse);
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'token': responseJson.token,
                        'Content-Type': 'application/json;charset=UTF-8"'
                    },
                })
                const responseData = await response.json(); // Yanıtı JSON olarak almak için
                console.log(responseData);
            } else {
                event.preventDefault()
            }
        }
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
