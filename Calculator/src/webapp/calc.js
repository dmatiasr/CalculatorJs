
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

	$("#mostrar").click(function () {

		if ( $( "#calculos:first" ).is( ":hidden" ) ) {
    		$("#calculos").slideDown("slow", function () {
			$.getJSON("http://localhost:8080/calculator/").done(function (data) {
				$.each(data, function (key, item) {
					$('<li>', {text: item.representation }).appendTo($('#calculos') ) ;
				})
			})	
	
		})	
  		}else{
  			$("#calculos").slideUp();	
  		}
	})

	$("#guardar").click(function () {
		var exp = $("#expression").val();
		alert("para guardar "+exp)
		$.post("http://localhost:8080/calculator/create",
			exp).done(function (data) {
				alert("Data: "+data);
			});
	})
	

		
})