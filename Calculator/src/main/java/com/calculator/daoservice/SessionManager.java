package com.calculator.daoservice;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;


@Component
public class SessionManager {

	public SessionManager(){
	
	}
	private SessionFactory getSessionFactory(){
		SessionFactory sf;
		
		    try 
		    { 
		    	sf = new Configuration().configure().buildSessionFactory();
		    	
		    } catch (HibernateException he) 
		    { 
		        System.err.println("Initialitation Problem : SessionFactory: " + he); 
		        throw new ExceptionInInitializerError(he); 
		    }
		    return sf;
		}
	
	@Bean
	public Session getSession(){
		return this.getSessionFactory().openSession();
	}
	
}
