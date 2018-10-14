pJS_desktop = () => particlesJS.load('particles', 'js/particles.json', function() {
  document.getElementsByTagName("canvas")[0].className += " fadeIn";
});

pJS_mobile = () => particlesJS.load('particles', 'js/particles_mobile.json', function() {
  document.getElementsByTagName("canvas")[0].className += " fadeIn";
});

text = "Hey, I'm Kunaal";

type = () => {
  var curr = document.getElementById('typing');
  curr_text = curr.innerText;
  curr.innerText += text.charAt(curr_text.length);
  if (curr.innerText.length < text.length) {
      setTimeout(type, 50);
  } else {
    fadeIn();
    if(window.innerWidth > 400){
      pJS_desktop();
    }
  }
}

fadeIn = () => {
  var elements = document.getElementsByClassName("icon");
  for (var i = 0; i < elements.length; i++) {
    elements[i].className += " fadeIn";
  }
}

if(window.innerWidth > 400){
  setTimeout(type, 1500);
}else{
  pJS_mobile();
  document.getElementById('typing').innerText = text;
  fadeIn();
}
