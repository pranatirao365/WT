package com.demo;

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if (username.equals("admin") && password.equals("1234")) {

            HttpSession session = request.getSession();
            session.setAttribute("user", username);

            response.sendRedirect("home.jsp");

        } else {
            response.sendRedirect("login.jsp?error=1");
        }
    }
}