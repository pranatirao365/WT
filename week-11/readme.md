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
Artifact Id: hibernate-crud

click finish 
click Y

Open pom.xml → add:

<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.demo</groupId>
    <artifactId>hibernate-crud</artifactId>
    <version>0.0.1-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
    </properties>

    <dependencies>

        <!-- Hibernate -->
        <dependency>
            <groupId>org.hibernate.orm</groupId>
            <artifactId>hibernate-core</artifactId>
            <version>6.2.0.Final</version>
        </dependency>

        <!-- MySQL -->
        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <version>8.0.33</version>
        </dependency>

        <!-- Jakarta Persistence -->
        <dependency>
            <groupId>jakarta.persistence</groupId>
            <artifactId>jakarta.persistence-api</artifactId>
            <version>3.1.0</version>
        </dependency>

    </dependencies>

</project>

👉 Then:
Right-click → Maven → Update Project

In MySQL:

CREATE DATABASE hibernate_crud;


After adding:

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
        <property name="connection.url">jdbc:mysql://localhost:3306/hibernate_crud</property>
        <property name="connection.username">root</property>
        <property name="connection.password">root</property>

        <property name="dialect">org.hibernate.dialect.MySQLDialect</property>

        <property name="hbm2ddl.auto">update</property>
        <property name="show_sql">true</property>

        <mapping class="com.demo.Book"/>
        
    </session-factory>
</hibernate-configuration>

src/
 ├── main/
 │   ├── java/com/demo/
 │   │   ├── Book.java
 │   │   ├── HibernateUtil.java
 │   │   ├── BookCRUD.java
 │   │   ├── MainApp.java
 │   ├── resources/
 │       └── hibernate.cfg.xml

 create the files .. and copy code 
 src/main/java/com/demo/BookCRUD.java
 like this create other files 
 and then right click on mainapp and run as java application 
 and see output in console 
 