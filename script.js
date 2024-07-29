// Função para calcular o IMC
function calculateIMC() {
  // Obtenha o valor do campo de entrada "weight"
  let weight = document.getElementById("weight").value;

  // Obtenha o valor do campo de entrada "height"
  let height = document.getElementById("height").value;

  // Verifique se ambos os campos não estão vazios
  if (weight && height) {
    // Verifique se a altura não contém ponto ou vírgula
    if (!height.includes(".") && !height.includes(",")) {
      // Converta para inteiro e divida por 100 para converter cm para metros
      height /= 100;
    }

    // Calcule o IMC (peso dividido pela altura ao quadrado), arredonde para 2 casas decimais
    let result = (weight / (height * height)).toFixed(2);

    // Defina como o valor do campo de saída "result"
    document.getElementById("result").value = result;

    // Obtenha o campo de entrada "classification"
    let classification = document.getElementById("classification");

    if (result < 18.5) {
      // Se o IMC for menor que 18.5
      classification.value = "Abaixo do peso";
      classification.style.backgroundColor = "blue";
      classification.style.color = "white";
    } else if (result >= 18.5 && result <= 24.9) {
      // Se o IMC estiver entre 18.5 e 24.9
      classification.value = "Peso normal";
      classification.style.backgroundColor = "green";
      classification.style.color = "white";
    } else if (result >= 25 && result <= 29.9) {
      // Se o IMC estiver entre 25 e 29.9
      classification.value = "Sobrepeso";
      classification.style.backgroundColor = "yellow";
      classification.style.color = "black";
    } else if (result >= 30) {
      // Se o IMC for 30 ou maior
      classification.value = "Obeso";
      classification.style.backgroundColor = "red";
      classification.style.color = "black";
    }
  }
}

// Quando a janela carregar, configure os ouvintes de eventos
window.onload = () => {
  // Adicione o ouvinte de eventos para o campo de entrada "height" perder o foco
  document.getElementById("height").addEventListener("focusout", calculateIMC);

  // Adicione o ouvinte de eventos para o botão de cálculo
  document
    .getElementById("calculateButton")
    .addEventListener("click", calculateIMC);
};
