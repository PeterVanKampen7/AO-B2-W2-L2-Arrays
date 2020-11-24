var days = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

var dagen = document.getElementById("dagen");
for (var i = 0; i < days.length; i++) 
{
	dagen.innerHTML += days[i];
	if (i != days.length-1) 
	{
		dagen.innerHTML += ", ";
	}
	else
	{
		dagen.innerHTML += ".";
	}
}

var werkdagen = document.getElementById("werkdagen");
for (var i = 0; i < days.length-2; i++) 
{
	werkdagen.innerHTML += days[i];
	if (i != days.length-3) 
	{
		werkdagen.innerHTML += ", ";
	}
	else
	{
		werkdagen.innerHTML += ".";
	}
}

var weekenddagen = document.getElementById("weekenddagen");
for (var i = 5; i < days.length; i++) 
{
	weekenddagen.innerHTML += days[i];
	if (i != days.length-1) 
	{
		weekenddagen.innerHTML += ", ";
	}
	else
	{
		weekenddagen.innerHTML += ".";
	}
}

var reverseDagen = document.getElementById("reverseDagen");
for (var i = days.length-1; i >= 0; i--) 
{
	reverseDagen.innerHTML += days[i];
	if (i != 0) 
	{
		reverseDagen.innerHTML += ", ";
	}
	else
	{
		reverseDagen.innerHTML += ".";
	}
}

var reverseWerkdagen = document.getElementById("reverseWerkdagen");
for (var i = days.length-3; i >= 0; i--) 
{
	reverseWerkdagen.innerHTML += days[i];
	if (i != 0) 
	{
		reverseWerkdagen.innerHTML += ", ";
	}
	else
	{
		reverseWerkdagen.innerHTML += ".";
	}
}

var reverseWeekenddagen = document.getElementById("reverseWeekenddagen");
for (var i = days.length-1; i > days.length-3; i--) 
{
	reverseWeekenddagen.innerHTML += days[i];
	if (i != days.length-2) 
	{
		reverseWeekenddagen.innerHTML += ", ";
	}
	else
	{
		reverseWeekenddagen.innerHTML += ".";
	}
}