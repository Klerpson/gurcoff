const logo =document.getElementById('logo');

const cargarLogo = () => {
 console.log('ejecuta')
}

const observador = new IntersectionObserver(cargarLogo,{
  root: null,
  rootMargin: '0 0',
  threshold: 1
});

observador.observe(logo);