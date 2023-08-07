function toggleDivVisibility() {
    const minhaDiv = document.getElementById("foto-fixada");

    if (window.innerWidth <= 960) { // Altere o valor para o tamanho de tela desejado
      minhaDiv.style.display = 'none'; // Oculta a div
    } else {
      minhaDiv.style.display = 'block'; // Mostra a div
    }
}


toggleDivVisibility();

window.addEventListener('resize', toggleDivVisibility);