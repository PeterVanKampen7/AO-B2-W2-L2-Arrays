var array = [2, 4, 6, 8];

var display = document.getElementById("display");

for (var i = 0; i < array.length; i++) 
{
	display.innerHTML += "<h2>De tafel van "+array[i]+":</h2>";
	for (var j = 1; j <= 10; j++) 
	{
		var ans = array[i] * j;
		var output = j + " x " + array[i] + " = " + ans + "<br>";
		display.innerHTML += output;
	}
}