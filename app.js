'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
  // Alterna a classe dark-theme no body
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme'); // Adiciona/remova a classe light-theme

  // Verifica a classe atual do body
  var className = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';

  // Atualiza o texto do botão baseado na classe atual
  if (className === 'dark-theme') {
    this.textContent = 'Light';
  } else {
    this.textContent = 'Dark';
  }

  // Log da classe atual no console
  console.log('Current class name: ' + className);
});
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.feito');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.classList.toggle('feito-verde');
        });
    });
});