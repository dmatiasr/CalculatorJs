
$(document).ready(function (e) {

	//capture numbers
	$("#pto,#0,#1,#2,#3,#4,#5,#6,#7,#8,#9,#sum,#rest,#div,#mult,#porc").click(function () {
		
		var value = $(this).val();
		var box = $("#values").val();

		$("#values").val(box + value);

	})		
	
	//clear input
	$("#C").click(function () {
		$("#values").val("");
	})
	
	//delete one
	$("#x").click( function () {
		
		oldValue=$("#values").val()
		newValue= oldValue.slice(0,(oldValue.length-1) )

		$("#values").val(newValue);

	})

	//result
	$("#equal").click( function () {
		
		var exp = $("#values").val();
		$("#values").val(eval(exp));

		$("#expression").val(exp);

	})

	$("#mostrar").click(function (argument) {
		
		$.ajax({
			url:"http://localhost:8080/calculator/"
		}).then(function (data) {
			alert(data);
		})
	})
	

		
})