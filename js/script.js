pJS_desktop = () => particlesJS.load('particles', 'js/particles.json', function() {
  console.log('particles.js desktop loaded');
});

pJS_mobile = () => particlesJS.load('particles', 'js/particles_mobile.json', function() {
  console.log('particles.js mobile loaded');
});

if(window.innerWidth > 400){
  pJS_desktop();
}else{
  pJS_mobile();
}
