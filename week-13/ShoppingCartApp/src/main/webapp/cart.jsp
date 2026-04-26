<%@ page import="java.util.*, com.app.CartItem" %>

<html>
<head>
<style>
body { font-family: Arial; background:#f5f7fa; }
table {
    width:80%; margin:auto;
    border-collapse:collapse;
    background:white;
}
th, td {
    padding:10px;
    border:1px solid #ddd;
    text-align:center;
}
th { background:#3498db; color:white; }
a { display:block; text-align:center; margin:20px; }
</style>
</head>

<body>

<h2 style="text-align:center;">Your Cart</h2>

<table>
<tr>
<th>Name</th>
<th>Price</th>
<th>Qty</th>
<th>Total</th>
</tr>

<%
List<CartItem> cart = (List<CartItem>) request.getAttribute("cart");

if (cart != null) {
    for (CartItem item : cart) {
%>
<tr>
<td><%= item.getName() %></td>
<td><%= item.getPrice() %></td>
<td><%= item.getQuantity() %></td>
<td><%= item.getTotal() %></td>
</tr>
<%
    }
}
%>

</table>

<h3 style="text-align:center;">Total: Rs <%= request.getAttribute("total") %></h3>

<a href="checkout.jsp">Proceed to Checkout</a>

</body>
</html>