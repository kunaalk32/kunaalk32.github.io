pJS_desktop = () => particlesJS.load('particles', 'js/particles.json', function() {
});

pJS_mobile = () => particlesJS.load('particles', 'js/particles_mobile.json', function() {
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
  }
}

fadeIn = () => {
  var elements = document.getElementsByClassName("icon");
  for (var i = 0; i < elements.length; i++) {
    elements[i].className += " fadeIn";
  }
}

if(window.innerWidth > 400){
  pJS_desktop();
  setTimeout(type, 1500);
}else{
  pJS_mobile();
  document.getElementById('typing').innerText = text;
  fadeIn();
}
