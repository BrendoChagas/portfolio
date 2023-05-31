function escrevendoLetra() {
	function typeWrite(elemento) {
		const textoArray = elemento.innerHTML.split("");
		elemento.innerHTML = " ";
		textoArray.forEach(function (letra, i) {
			setTimeout(function () {
				elemento.innerHTML += letra;
			}, 75 * i);
		});
	}
	const titulo = document.querySelector(".digitando");
	typeWrite(titulo);
}

const ativaMenu = document.querySelector(".fa-bars");
const navMenu = document.querySelector("header .navegacao-primaria");

ativaMenu.addEventListener("click", () => {
	ativaMenu.classList.toggle("fa-x");
	navMenu.classList.toggle("ativado");
});