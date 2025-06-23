function debounce(func, wait) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

function buscarFilme(titulo) {
  console.log(`Buscando filmes com o título: "${titulo}" - ${new Date().toLocaleTimeString()}`);
}

const buscarFilmeComDebounce = debounce(buscarFilme, 2000);

buscarFilmeComDebounce("Star");
setTimeout(() => buscarFilmeComDebounce("Star W"), 500);
setTimeout(() => buscarFilmeComDebounce("Star Wa"), 1000);
setTimeout(() => buscarFilmeComDebounce("Star War"), 1500);
setTimeout(() => buscarFilmeComDebounce("Star Wars"), 2100); 