
/* ANIMAÇÂO IMAGEM */

const fetchSvg = (image) => {
    fetch(image.src)
      .then((response) => response.text())
      .then((response) => {
        const span = document.createElement("span");
        span.innerHTML = response;
        const inlineSvg = span.getElementsByTagName("svg")[0];
        image.parentNode.replaceChild(inlineSvg, image);
        return true;
      });
  };

/* ANIMAÇÂO MAQUINA DE ESCREVER */

function typeWriter(elemento) {
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 150 * i)    
  });

}

const titulo = document.querySelector("h1");
typeWriter(titulo);
