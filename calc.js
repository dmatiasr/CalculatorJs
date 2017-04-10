

$(document).ready(function (e) {

	alert('document ready')

	var form=[];
	//capture numbers
	$("#0,#1,#2,#3,#4,#5,#6,#7,#8,#9").click(function () {
		
		var value = $(this).val();
		var box = $("#values").val();

		$("#values").val(box + value);
	})		
	//capture signs
	$("#sum,#rest,#div,#mult,#porc").click(function () {
		var input = $("#values").val();
		form.push(input);
		
		$("#values").val("");
		form.push($(this).val());
		alert(form)

	})
	//clear input
	$("#C").click(function () {
		form=[];
		$("#values").val("");
	})
	//delete one
	$("#x").click( function () {
		
		oldValue=$("#values").val()
		newValue= oldValue.slice(0,(oldValue.length-1) )

		$("#values").val(newValue);

	})
	//

		
})