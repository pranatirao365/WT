package com.demo;

import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class BookCRUD {

    // CREATE
    public void saveBook(Book book) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        session.save(book);

        tx.commit();
        session.close();
        System.out.println("Book Inserted!");
    }

    // READ
    public void getBooks() {
        Session session = HibernateUtil.getSessionFactory().openSession();

        List<Book> books = session.createQuery("from Book", Book.class).list();

        for (Book b : books) {
            System.out.println(b.getId() + " " + b.getTitle() + " " + b.getAuthor() + " " + b.getPrice());
        }

        session.close();
    }

    // UPDATE
    public void updateBook(int id) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        Book book = session.get(Book.class, id);
        if (book != null) {
            book.setPrice(999);
            session.update(book);
            System.out.println("Book Updated!");
        }

        tx.commit();
        session.close();
    }

    // DELETE
    public void deleteBook(int id) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        Book book = session.get(Book.class, id);
        if (book != null) {
            session.delete(book);
            System.out.println("Book Deleted!");
        }

        tx.commit();
        session.close();
    }
}