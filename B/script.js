var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

var display = document.getElementById("display");
display.innerHTML += "<h1>Array Operatoren</h1>";

function optellen(arrayEen, arrayTwee)
{
	display.innerHTML += "<h2>Optellen van de twee arrays zijn</h2>";
	for (var i = 0; i < 10; i++) 
	{
		var ans = arrayEen[i] + arrayTwee[i];
		var output = arrayEen[i] + " + " + arrayTwee[i] + " = " + ans + "<br>";
		display.innerHTML += output;
	}
}
optellen(arrayEen, arrayTwee);

function aftrekken(arrayTwee, arrayEen)
{
	display.innerHTML += "<h2>Aftrekken van de twee arrays zijn</h2>";
	for (var i = 0; i < 10; i++) 
	{
		var ans = arrayTwee[i] - arrayEen[i];
		var output = arrayTwee[i] + " - " + arrayEen[i] + " = " + ans + "<br>";
		display.innerHTML += output;
	}
}
aftrekken(arrayTwee, arrayEen);

function vermenigvuldigen(arrayEen, arrayTwee)
{
	display.innerHTML += "<h2>Vermenigvuldigen van de twee arrays zijn</h2>";
	for (var i = 0; i < 10; i++) 
	{
		var ans = arrayEen[i] * arrayTwee[i];
		var output = arrayEen[i] + " * " + arrayTwee[i] + " = " + ans + "<br>";
		display.innerHTML += output;
	}
}
vermenigvuldigen(arrayEen, arrayTwee);

function delen(arrayTwee, arrayEen)
{
	display.innerHTML += "<h2>Delen van de twee arrays zijn</h2>";
	for (var i = 0; i < 10; i++) 
	{
		var ans = arrayTwee[i] / arrayEen[i];
		var output = arrayTwee[i] + " / " + arrayEen[i] + " = " + ans + "<br>";
		display.innerHTML += output;
	}
}
delen(arrayTwee, arrayEen);