<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
<style>
body { font-family: Arial; background:#f0f2f5; }
.box {
    width:300px; margin:100px auto; padding:20px;
    background:white; border-radius:10px;
    box-shadow:0 0 10px gray; text-align:center;
}
input { width:90%; padding:10px; margin:10px 0; }
button { padding:10px; width:100%; background:#667eea; color:white; border:none; }
.error { color:red; }
</style>
</head>

<body>
<div class="box">
<h2>Login</h2>

<form action="login" method="post">
    <input type="text" name="username" placeholder="Username"><br>
    <input type="password" name="password" placeholder="Password"><br>
    <button>Login</button>
</form>

<%
if(request.getParameter("error") != null){
%>
<p class="error">Invalid Credentials</p>
<% } %>

</div>
</body>
</html>