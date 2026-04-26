package com.app;

import java.io.IOException;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;

@WebServlet("/checkout")
public class CheckoutServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        String name = req.getParameter("name");
        String address = req.getParameter("address");
        String phone = req.getParameter("phone");

        HttpSession session = req.getSession();

        Object cart = session.getAttribute("cart");

        if (cart == null) {
            res.sendRedirect("cart");
            return;
        }

        // Clear cart
        session.removeAttribute("cart");

        req.setAttribute("name", name);

        req.getRequestDispatcher("success.jsp").forward(req, res);
    }
}