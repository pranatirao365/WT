<%@ page contentType="text/html;charset=UTF-8" %>
<%
String user = (String) session.getAttribute("user");
if(user == null){
    response.sendRedirect("login.jsp");
    return;
}
%>

<html>
<body style="text-align:center; font-family:Arial;">

<h2>Welcome <%= user %> 🎉</h2>

<a href="books.jsp">
    <button>View Books</button>
</a>

<br><br>

<a href="logout">
    <button style="background:red;">Logout</button>
</a>

</body>
</html>