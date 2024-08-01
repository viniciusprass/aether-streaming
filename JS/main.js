var overlay = document.querySelector('#overlay')

document.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.style.background = ' #03063A'
    } else {
        header.style.background = 'none'
    }
});

//Animação da logo
var logo = document.querySelector('#logo-header');
var words = ["Ngg", "NggFLix", "moovie","BrasFlix","ClipCloud", "Undefined"];
var currentWordIndex = 0;

function animateText() {
    var currentWord = words[currentWordIndex];
    var text = currentWord.substring(0, logo.textContent.length + 1); 

    logo.textContent = text;
    if (currentWord === "Undefined"){
        logo.style.color = '#fff'
        logo.style.textShadow = '0 0 30px #fff'
    } else {
        logo.style.color = 'rgba(255, 255, 255, .4)'
        logo.style.textShadow = 'none'
        logo.style.transition = '0s'
    }
    if (text === currentWord) {
        if (currentWord === "Undefined"){
            setTimeout(eraseText, 10000);
        } else {
            setTimeout(eraseText, 1000);
        }
    } else {
        setTimeout(animateText, 80);
    }

}

function eraseText() {
    var text = logo.textContent;
    logo.textContent = text.substring(0, text.length - 1);

    if (text.length === 0) {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(animateText, 500);
    } else {
        setTimeout(eraseText, 50);
    }
}

animateText();