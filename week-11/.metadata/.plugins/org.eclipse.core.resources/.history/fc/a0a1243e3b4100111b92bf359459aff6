package com.demo;

public class MainApp {

    public static void main(String[] args) {

        BookCRUD crud = new BookCRUD();

        // CREATE
        crud.saveBook(new Book("Java", "James", 500));
        crud.saveBook(new Book("DBMS", "Korth", 450));

        // READ
        System.out.println("All Books:");
        crud.getBooks();

        // UPDATE
        crud.updateBook(1);

        // DELETE
        crud.deleteBook(2);
    }
}