
$(window).load(function(){

    $('#circle_1').css('background', '#66c8b8');$("#circle_1").click(function () {
    $('#circle_1').css('background', '#66c8b8');
    $("#milestone1").fadeToggle( "slow", "linear" );
    $("#milestone2").hide();
    $("#milestone3").hide();
	$("#milestone4").hide();
    $("#milestone5").hide();
    $("#milestone6").hide();
    $("#milestone7").hide();
    $("#milestone8").hide();
    $("#milestone9").hide();
	});

	$("#milestone2").hide();
	$("#circle_2").click(function () {
	$('#circle_2').css('background', '#66c8b8');
    $("#milestone1").hide();
    $("#milestone2").fadeToggle( "slow", "linear" );
    $("#milestone3").hide();
	$("#milestone4").hide();
    $("#milestone5").hide();
    $("#milestone6").hide();
    $("#milestone7").hide();
    $("#milestone8").hide();
    $("#milestone9").hide();
	});

	$("#milestone3").hide();
	$("#circle_3").click(function () {
	$('#circle_3').css('background', '#66c8b8');
    $("#milestone1").hide();
    $("#milestone2").hide();
    $("#milestone3").fadeToggle( "slow", "linear" );
	$("#milestone4").hide();
    $("#milestone5").hide();
    $("#milestone6").hide();
    $("#milestone7").hide();
    $("#milestone8").hide();
    $("#milestone9").hide();
	});

	$("#milestone4").hide();
	$("#circle_4").click(function () {
	$('#circle_4').css('background', '#66c8b8');
    $("#milestone1").hide();
    $("#milestone2").hide();
    $("#milestone3").hide();
    $("#milestone4").fadeToggle( "slow", "linear" );
    $("#milestone5").hide();
    $("#milestone6").hide();
    $("#milestone7").hide();
    $("#milestone8").hide();
    $("#milestone9").hide();
	});

	$("#milestone5").hide();
	$("#circle_5").click(function () {
	$('#circle_5').css('background', '#66c8b8');
    $("#milestone1").hide();
    $("#milestone2").hide();
    $("#milestone3").hide();
	$("#milestone4").hide();
    $("#milestone5").fadeToggle( "slow", "linear" );
    $("#milestone6").hide();
    $("#milestone7").hide();
    $("#milestone8").hide();
    $("#milestone9").hide();
	});

	$("#milestone6").hide();
	$("#circle_6").click(function () {
	$('#circle_6').css('background', '#66c8b8');
    $("#milestone1").hide();
    $("#milestone2").hide();
    $("#milestone3").hide();
	$("#milestone4").hide();
    $("#milestone5").hide();
    $("#milestone6").fadeToggle( "slow", "linear" );
    $("#milestone7").hide();
    $("#milestone8").hide();
    $("#milestone9").hide();
	});

	$("#milestone7").hide();
	$("#circle_7").click(function () {
	$('#circle_7').css('background', '#66c8b8');
    $("#milestone1").hide();
    $("#milestone2").hide();
    $("#milestone3").hide();
	$("#milestone4").hide();
    $("#milestone5").hide();
    $("#milestone6").hide();
    $("#milestone7").fadeToggle( "slow", "linear" );
    $("#milestone8").hide();
    $("#milestone9").hide();
	});

	$("#milestone8").hide();
	$("#circle_8").click(function () {
	$('#circle_8').css('background', '#66c8b8');
    $("#milestone1").hide();
    $("#milestone2").hide();
    $("#milestone3").hide();
	$("#milestone4").hide();
    $("#milestone5").hide();
    $("#milestone6").hide();
    $("#milestone7").hide();
    $("#milestone8").fadeToggle( "slow", "linear" );
    $("#milestone9").hide();
	});

	$("#milestone9").hide();
	$("#circle_9").click(function () {
    $('#circle_9').css('background', '#66c8b8');
    $('.line').css('background', '#66c8b8');
    $("#milestone2").hide();
    $("#milestone3").hide();
	$("#milestone4").hide();
    $("#milestone5").hide();
    $("#milestone6").hide();
    $("#milestone7").hide();
    $("#milestone8").hide();
    $("#milestone9").fadeToggle( "slow", "linear" );
	});
});
