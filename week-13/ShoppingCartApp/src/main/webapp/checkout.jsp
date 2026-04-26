<html>
<head>
<style>
body { font-family: Arial; text-align:center; }
input, textarea {
    width:300px; padding:8px; margin:10px;
}
button {
    background:green; color:white;
    padding:10px; border:none;
}
</style>
</head>

<body>

<h2>Checkout</h2>

<form action="checkout" method="post">
<input type="text" name="name" placeholder="Name" required><br>
<textarea name="address" placeholder="Address" required></textarea><br>
<input type="text" name="phone" placeholder="Phone" required><br>
<button type="submit">Place Order</button>
</form>

</body>
</html>