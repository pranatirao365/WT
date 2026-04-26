# Week 4 — Shopping Cart Functionality

## Overview
This week introduces a simple, client-side **Shopping Cart** using HTML, CSS, and Vanilla JavaScript. It simulates adding books to a cart, managing item quantities, and calculating total prices dynamically. 

Data persistence is implemented using `localStorage` so your cart will not clear if you refresh the page.

## How to Run
- Double-click `index.html` located in `.week-4/` to open it in your web browser. 

## Features
- **Product Listing:** A clean Flexbox grid displaying the available books, along with their names and prices.
- **Add to Cart:** Users can click "Add to Cart" to inject books into the cart. 
- **Dynamic Updates:** The cart counter, the cart listing, and the total price all update dynamically via JavaScript DOM manipulation without page reloads.
- **Adjust Quantities:** Users can easily increase (+) or decrease (-) the quantities of items within their cart.
- **Remove Items:** Users can permanently strike out items off the queue using the remove ('✕') button.
- **Persistence (localStorage):** Cart data is persisted as a JSON string inside the browser's `localStorage` (key: `shopping_cart`), so it survives tab reloads.
- **Checkout Simulation:** Validates cart isn't empty, prompts the user to confirm, presents an order success alert message, and clears the cart simultaneously.

## Implementation Details
- This week is encapsulated entirely within standard Web APIs without requiring any external frameworks or database backends.
- Uses semantic HTML tags (`<header>`, `<main>`, `<section>`, `<aside>`) to construct a layout. 
- Modern flexbox capabilities enable an easy two-column layout that shifts back into a single column on smaller/mobile viewports.