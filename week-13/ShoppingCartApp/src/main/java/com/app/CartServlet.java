package com.app;

import java.io.IOException;
import java.util.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;

@WebServlet("/cart")
public class CartServlet extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        HttpSession session = req.getSession();
        List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");

        double total = 0;

        if (cart != null) {
            for (CartItem item : cart) {
                total += item.getTotal();
            }
        }

        req.setAttribute("cart", cart);
        req.setAttribute("total", total);

        req.getRequestDispatcher("cart.jsp").forward(req, res);
    }
}