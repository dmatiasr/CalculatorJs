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
function addNumber(numb) {
	v= document.getElementById('values');
	oldValue=v.value;
	newValue=oldValue+numb;
	v.value=newValue;
}
