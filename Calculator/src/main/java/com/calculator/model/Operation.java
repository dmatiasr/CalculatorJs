package com.calculator.model;

import java.util.UUID;

/**
 * Operation Model represent a operation of calculator.
 * @author rondeau
 *
 */
public class Operation {
	private String id;
	private String representation;
	
	public Operation(){
		
	}
	public Operation(String rep){
		this.id= UUID.randomUUID().toString();
		this.representation=rep;
	}
	
	public void setId(String id){
		this.id=id;
	}
	public String getId() {
		return id;
	}
	
	public String getRepresentation() {
		return representation;
	}
	public void setRepresentation(String representation) {
		this.representation = representation;
	}

	@Override
	public String toString() {
		return "Operation [id=" + id + ", representation=" + representation
				+ "]";
	}

	  	
	
}
