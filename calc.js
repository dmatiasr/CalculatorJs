function clr() {
	v = document.getElementById('values');
	v.value ="";
}
function deleteOne() {
	v= document.getElementById('values');
	oldValue= v.value;
	newValue= oldValue.slice(0,(oldValue.length-1))
	v.value=newValue;
}
function addDigit(digit) {
	v= document.getElementById('values');
	oldValue=v.value;
	newValue=oldValue+digit;
	v.value=newValue;
}
//
//return result to press equals (=)
//
function result() {

	v=document.getElementById('values');

 	//check if is well formed.
	alert("Entre a result 1");
	
	wellFormed = wellFormedParam(v.value);
	check=v.value;

	if(wellFormed){
		var sign=[];
		var position=0;
		var terms=[];
		for(var i=0 ; i<check.length ; i++){
				
		}		
		
	}else{
		alert("Expresion mal formada");	
	}
//	alert("pase por aqui");
}
//
//@param digit
// return truee iff digit is a math operation
//
function isOperation(digit) {
	var isOp=false;
	if (digit=='/' || digit=='+' || digit=='-' || digit=='*' || digit=='%' ){
		isOp=true;
	}
	return isOp;
}
//
//@param check
//return true iff check not glue math sign and limit not are math sign.
function wellFormedParam(check) {
	var wellFormed=false;
	alert("entre a funcion wellFormedParam");
	for (var i = 0; i< check.length-1 ; i++) {
		
		var b = (check[i]==','|| check[i]=='*' ||check[i]=='-' || check[i]=='/' || check[i]=='+' ||check[i]=='%');
		var bb= (check[i+1]=='*' ||check[i+1]=='-' || check[i+1]=='/' || check[i+1]=='+' ||check[i+1]=='%');
		//glued sign 
		if (! (b && bb) ){
			wellFormed=true;
		}
		b=(check[0]==',' || check[0]=='*' ||check[0]=='-' || check[0]=='/' || check[0]=='+' ||check[0]=='%');
		bb=(check[0]==',' || check[check.length-1]=='*' ||check[check.length-1]=='-' || check[check.length-1]=='/' || check[check.length-1]=='+' ||check[check.length-1]=='%');
		//first sign , last sign
		if (b || bb){
			wellFormed=false;
		}
	}
	alert("end wellFormedParam");
	return wellFormed;
}
