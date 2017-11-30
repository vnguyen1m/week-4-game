var wins = 0;
var losses = 0;

var math = 0;

/**Random Number**/
var number = Math.floor((Math.random()* 100) + 19);

/**Random Crystal Power**/
var jade = Math.floor((Math.random()* 12) + 1);
var monkey = Math.floor((Math.random()* 12) + 1);
var dog = Math.floor((Math.random()* 12) + 1);
var panda = Math.floor((Math.random()* 12) + 1);

var configmath = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('.math').empty();
	$('.math').append(math);
	
}

var reset = function(){
	math = 0;
    number = Math.floor((Math.random()* 100) + 19);

	$('.number').empty();
	$('.number').append(number);

	jade = Math.floor((Math.random()* 12) + 1);
    monkey = Math.floor((Math.random()* 12) + 1);
    dog = Math.floor((Math.random()* 12) + 1);
    panda = Math.floor((Math.random()* 12) + 1);
    configmath();
}

var config = function (){
	if (math == number) {
		wins = wins + 1;
		reset();
}
	else if(math > number){
		losses = losses + 1;
		reset();
}
	else{
		configmath();
}}

	$('.math').append(math);
	$('.number').append(number);

	$(document).ready(function(){
	$('#jade').click(function(){
		math = math + monkey;
		config();
	})
	$('#monkey').click(function(){
		math  = math  + jade;
		config();
	})
	$('#dog').click(function(){
		math  = math  + dog;
		config();
	})
	$('#panda').click(function(){
		math  = math  + panda;
		config();
	})
});













