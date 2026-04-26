Open Eclipse
Go:
File → New → Dynamic Web Project
Enter:
Name: ShoppingCartApp
Target Runtime: Apache Tomcat
Click Finish

Right click src → New → Package
Name:
com.app

2.1 CartItem.java

Right click package → New → Class

In Eclipse Project Explorer
Expand your project:
ShoppingCartApp → src → com.app
Right-click on:
com.app
Click:
New → Servlet

Create all these servlets individually 

Class Name
AddToCartServlet
CartServlet
CheckoutServlet

STEP 3: Create JSP Files

Right click WebContent → New → JSP

3.1 products.jsp
3.2 cart.jsp
3.3 checkout.jsp
3.4 success.jsp



If server doesnt run do this : 


🔥 Step 1: Delete existing server (important)
Go to Servers tab (bottom panel)
Right-click your Tomcat
Click:
Delete → ✔ Also delete server configuration
🔥 Step 2: Re-add Tomcat properly
Go:
Window → Preferences
Navigate:
Server → Runtime Environments
Click:
Add → Apache → Apache Tomcat v9 (or your version)
Click Browse
👉 Select your Tomcat folder (example):
C:\apache-tomcat-9.0.xx
Click:
Finish → Apply → OK
🔥 Step 3: Add server again
Open Servers tab
Click:
No servers available → create new server
Select Tomcat → Finish

Step 1: Add Tomcat Runtime to Project
Right-click project →
Properties
Go to:
Targeted Runtimes
✔ Check:
Apache Tomcat v10.x (or your version)
Click:
Apply → OK

🔥 Step 4: Clean + Restart
Right-click project:
Clean
Then:
Run As → Run on Server

