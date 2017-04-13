package com.calculator.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.calculator.daoservice.DaoCalculator;
import com.calculator.model.Operation;
import com.google.gson.Gson;

@RestController
@RequestMapping("/calculator")
public class CalculatorController {

	@Autowired
	private DaoCalculator daoc;

	@RequestMapping("/ping")
	public String pong (){
		return "pong";
	}
	
	@RequestMapping("/")
	public List<Operation> getAll(){
		return daoc.getAll();
	}
	
	@RequestMapping(value="/create", method=RequestMethod.POST)
	public String create (@RequestBody String json){
		
		if (json==null || json.equals("")) return ""+false;
		Operation op = new Gson().fromJson(json, Operation.class);
		boolean res = daoc.create(new Operation(op.getRepresentation()));
		return ""+res;
	}
	


}
