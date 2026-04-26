<%@ page contentType="text/html;charset=UTF-8" %>

<%
String user = (String) session.getAttribute("user");

if(user == null){
    response.sendRedirect("login.jsp");
    return;
}
%>

<html>
<head>
<title>Book System</title>

<style>
body {
    font-family: Arial;
    background: #f4f6f9;
    margin: 0;
}

.header {
    background: #667eea;
    color: white;
    padding: 15px;
    text-align: center;
}

.container {
    padding: 20px;
    text-align: center;
}

button {
    padding: 10px 20px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

iframe {
    width: 80%;
    height: 400px;
    border: 1px solid #ccc;
    margin-top: 20px;
}
</style>

</head>

<body>

<div class="header">
    <h2>Welcome <%= user %></h2>
</div>

<div class="container">

    <h3>Book System</h3>

    <a href="books" target="frame">
        <button>View Books</button>
    </a>

    <br>

    <iframe name="frame"></iframe>

    <br><br>

    <a href="logout">
        <button style="background:red;">Logout</button>
    </a>

</div>

</body>
</html>