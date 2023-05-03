let storedProductNames = localStorage.getItem("productNames")

let productNames = storedProductNames ? JSON.parse(storedProductNames) : [];
console.log(productNames);
