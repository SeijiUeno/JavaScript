alert('Welcome to the Secret Number game!');

let	numeroSecreto = 42;
let	input = prompt('Choose a number Between 01 and 42');
if (input == numeroSecreto)
	alert("Congratulations, you discovered the secret number!");
else
	alert("Wrong!");