```jsp
<html>
<head>
    <title>Book Store</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f7fa;
            margin: 0;
            padding: 0;
        }

        h2 {
            text-align: center;
            background-color: #2c3e50;
            color: white;
            padding: 15px;
            margin: 0;
        }

        #cartCount {
            text-align: center;
            font-size: 20px;
            margin: 15px;
            color: #2c3e50;
        }

        .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            padding: 20px;
        }

        .book-card {
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.2s ease;
        }

        .book-card:hover {
            transform: translateY(-5px);
        }

        .book-title {
            font-size: 18px;
            font-weight: bold;
            margin: 10px 0;
        }

        .price {
            color: #27ae60;
            font-size: 16px;
            margin-bottom: 10px;
        }

        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #2980b9;
        }
    </style>

    <script src="cart.js"></script>
</head>

<body>

<h2>Online Book Store</h2>

<h3 id="cartCount">Cart Items: 0</h3>

<div class="container">

    <div class="book-card">
        <div class="book-title">Java Programming</div>
        <div class="price">₹499</div>
        <button onclick="addToCart('Java Programming')">Add to Cart</button>
    </div>

    <div class="book-card">
        <div class="book-title">Python Basics</div>
        <div class="price">₹399</div>
        <button onclick="addToCart('Python Basics')">Add to Cart</button>
    </div>

    <div class="book-card">
        <div class="book-title">Data Structures</div>
        <div class="price">₹599</div>
        <button onclick="addToCart('Data Structures')">Add to Cart</button>
    </div>

    <div class="book-card">
        <div class="book-title">DBMS Concepts</div>
        <div class="price">₹450</div>
        <button onclick="addToCart('DBMS Concepts')">Add to Cart</button>
    </div>

    <div class="book-card">
        <div class="book-title">Operating Systems</div>
        <div class="price">₹550</div>
        <button onclick="addToCart('Operating Systems')">Add to Cart</button>
    </div>

    <div class="book-card">
        <div class="book-title">Web Development</div>
        <div class="price">₹499</div>
        <button onclick="addToCart('Web Development')">Add to Cart</button>
    </div>

</div>

</body>
</html>
```
