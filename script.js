document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".AdicionarCarrinho");
  const contador = document.getElementById("contador");

  let carrinhoCount = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      carrinhoCount++;
      contador.textContent = carrinhoCount;
    });
  });
});

function filterOptions() {
  const input = document.getElementById("pesquisar");
  const datalist = document.getElementById("options");
  const filterValue = input.value.toLowerCase();
  while (datalist.firstChild) {
    datalist.removeChild(datalist.firstChild);
  }
  const options = ["Maçã", "Abacaxi", "Bergamota", "Uva",  "Uva", "Laranja", "Pera", "Banana"];
  options.forEach((option) => {
    if (option.toLowerCase().startsWith(filterValue)) {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      datalist.appendChild(optionElement);
    }
  });
}

