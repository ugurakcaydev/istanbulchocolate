const menu = document.querySelector("#menu")
const yazilar = document.querySelector(".yazilar")
menu.addEventListener("click", () => {
    (yazilar.className == "yazilar") ? yazilar.classList.add("unactive") : yazilar.classList.remove("unactive")
})