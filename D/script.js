var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];

var rand = Math.floor((Math.random() * spellen.length));

document.getElementById("display").innerHTML = spellen[rand];