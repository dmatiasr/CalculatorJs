package com.calculator.daoservice;

import java.util.LinkedList;
import java.util.List;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.calculator.model.Operation;

@Component
public class DaoCalculator {
	
	@Autowired
	Session service;
	
//	public DaoCalculator(Session s){
//		this.service=s;
//	}
	
	public List<Operation> getAll(){
		List<Operation> op = new LinkedList<Operation>();
		op.addAll(service.createQuery("from Operation").list() );
		return op;
	}
//	
	public boolean create(Operation op){
		if( op==null ) return false;
		service.beginTransaction();
		service.save(op);
		service.getTransaction().commit();
		return true;

	}
//	
//	
	
}
