function addToCart(item) {
    fetch("cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "item=" + item
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("cartCount").innerText = data;
    })
    .catch(error => console.error(error));
}/**
 * 
 */