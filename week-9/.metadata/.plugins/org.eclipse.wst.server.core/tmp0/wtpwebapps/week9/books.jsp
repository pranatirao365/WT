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

<h2>Book List</h2>

<table border="1" style="margin:auto; padding:10px;">
<tr>
<th>ID</th><th>Title</th><th>Author</th><th>Price</th>
</tr>

<tr><td>1</td><td>Java Programming</td><td>James Gosling</td><td>500</td></tr>
<tr><td>2</td><td>DBMS Concepts</td><td>Korth</td><td>450</td></tr>
<tr><td>3</td><td>Web Tech</td><td>Deitel</td><td>400</td></tr>

</table>

<br><br>

<a href="home.jsp">
    <button>Back</button>
</a>

</body>
</html>