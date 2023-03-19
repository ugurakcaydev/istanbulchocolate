// var element = document.getElementById("password");
// myFunction = (icon) => icon.classList.toggle('fa-eye'),
//     element.type = (element.type == "password") ? "password" : "text"
function showPassword(id, el) {
    let x = document.getElementById(id)
    if (x.type == "password") {
        x.type = "text";
        el.src = "./icons/1.png"
    } else {
        x.type = "password";
        el.src = "./icons/2.png"
    }
}

var typingEffect = new Typed(".multiText", {/*multiTextt düzgün çalışmıyor.*/
    strings: ["The first step for Istanbul Chocolates to become one of the biggest brands in Turkey's cocoa, chocolate and confectionery sector is taken with its first store in Beyoğlu. With more than 200 product types, classic varieties such as madlens, specialties, dragees, special day chocolates and gift baskets, the company's six city stores, five stores in major metropolitan airports and a small mail order branch in Beyoğlu lead the sector. The first store is a very important step. Because this first store in Beyoğlu is the first place where sweet lovers and Istanbul Chocolates meet."],
    loop: false,
    typeSpeed: 60,
})
