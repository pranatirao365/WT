package com.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class MainApp {

    public static void main(String[] args) {

        try {
            Configuration cfg = new Configuration();
            cfg.configure("hibernate.cfg.xml");

            SessionFactory factory = cfg.buildSessionFactory();
            Session session = factory.openSession();

            System.out.println("Hibernate Connected Successfully!");

            session.close();
            factory.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}