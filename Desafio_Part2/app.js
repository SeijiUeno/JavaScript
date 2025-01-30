let h1 = document.querySelector('h1');
h1.innerHTML = "Hora do Desafio";

function Console()
{
	console.log("O botão foi clicado!");
}

function Alert()
{
	alert("Eu Amo JS!");
}

function Prompt()
{
	const cidade = prompt("Digite o nome de uma cidade do Brasil:");
	
	if (cidade)
			alert(`Estive em ${cidade} e lembrei de você.`);
}

function Soma() {
    const number_one = parseInt(prompt("Digite o primeiro número inteiro:"));
    const number_two = parseInt(prompt("Digite o segundo número inteiro:"));
    
	const soma = number_one + number_two;
    alert(`A soma de ${number_one} e ${number_two} é igual a ${soma}.`);
}