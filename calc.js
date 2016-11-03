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
function result() {

	v=document.getElementById('values');
 	//check if is well formed.
	alert("Entre a result");
	check= v.value;
	
	var wellFormed=false;
	
	for (var i = 0; i< check.length-1 ; i++) {
		
		var b = (check[i]==','|| check[i]=='*' ||check[i]=='-' || check[i]=='/' || check[i]=='+' ||check[i]=='%');
		var bb= (check[i+1]=='*' ||check[i+1]=='-' || check[i+1]=='/' || check[i+1]=='+' ||check[i+1]=='%');
		//glued sign 
		if (! (b && bb) ){
			wellFormed=true;
			alert(wellFormed);
		}
		b=(check[0]=='*' ||check[0]=='-' || check[0]=='/' || check[0]=='+' ||check[0]=='%');
		bb=(check[check.length-1]=='*' ||check[check.length-1]=='-' || check[check.length-1]=='/' || check[check.length-1]=='+' ||check[check.length-1]=='%');
		//first sign , last sign
		if (b || bb){
			wellFormed=false;
			alert(wellFormed);
		}
	}
	//var signs
	if(wellFormed){
		//get operation
		//for (var i = 0 ;i < check.length ; i++) {
		//	var res= check[i];
		//	for (var j=0 ; check[j]!=) {
				
		//	}
		//}


	}else{
		alert("Expresion mal formada");	
	}
	alert("pase por aqui");
}
