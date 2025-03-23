const typingText = "Olá, meu nome é Douglas."
let typingSpeed = 50;
let textIndice = 0;

function typeTextOnHtml () {
  if( textIndice < typingText.length ) {
    document.getElementById("greeting").innerHTML += typingText.charAt(textIndice);
    textIndice++
    setTimeout(typeTextOnHtml, typingSpeed);
  }
}

window.onload = function() {
  typeTextOnHtml();
};