In Eclipse:

File → New → Maven Project (recommended)

n the Filter box, type:

maven-archetype-quickstart
You will see:
org.apache.maven.archetypes
maven-archetype-quickstart

👉 Select that row

👉 Then click:
Next >

Fill this :
Group Id:    com.demo
Artifact Id: hibernate-demo
Package:     com.demo

click finish 
click Y

pom.xml

🔧 Inside <dependencies>, add:
<dependency>
    <groupId>org.hibernate.orm</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>6.2.0.Final</version>
</dependency>

<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.0.33</version>
</dependency>

<dependency>
    <groupId>jakarta.persistence</groupId>
    <artifactId>jakarta.persistence-api</artifactId>
    <version>3.1.0</version>
</dependency>
✅ After adding:

👉 Right-click project →
Maven → Update Project-ok


Check:

src/main/resources

👉 If NOT present:

Right-click main
New → Folder → name:
resources


Inside:

src/main/resources

👉 Create file:

hibernate.cfg.xml

👉 Switch to:
Source tab (bottom, next to Design)
Add basic configuration:
Replace:
YOUR_PASSWORD
with your MySQL password

<!DOCTYPE hibernate-configuration PUBLIC
"-//Hibernate/Hibernate Configuration DTD 3.0//EN"
"http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd">

<hibernate-configuration>
    <session-factory>

        <property name="connection.driver_class">com.mysql.cj.jdbc.Driver</property>
        <property name="connection.url">jdbc:mysql://localhost:3306/hibernate_db</property>
        <property name="connection.username">root</property>
        <property name="connection.password">YOUR_PASSWORD</property>

        <property name="dialect">org.hibernate.dialect.MySQLDialect</property>

        <property name="hbm2ddl.auto">update</property>
        <property name="show_sql">true</property>

        <mapping class="com.demo.Book"/>
        <mapping class="com.demo.User"/>

    </session-factory>
</hibernate-configuration>


MySQL Workbench
Open MySQL Workbench
Connect to your local server
Open a new SQL tab
Run:

CREATE DATABASE hibernate_db;

Click Execute (⚡)

You should see: in schemas
hibernate_db


Go to:
src/main/java/com/demo
👉 Create:
Book.java
User.java

To start Hibernate and connect to database

📍 Location:
src/main/java/com/demo

👉 Create:

MainApp.java

paste the codes .. 

Step 2:

Right-click project →
Maven → Update Project

Step 3:

Run:
👉 MainApp.java
You should choose:

👉 Run As → Java Application
🚀 Exact steps
Go to:
MainApp.java
Right-click
Click:
Run As → Java Application

Console:
Hibernate Connected Successfully!
MySQL:

👉 You should see: in mysql

books table
users table