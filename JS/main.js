const slider = document.querySelector('.slider');
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
const totalImages = slider.children.length;
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;

    if (currentIndex == 1) {
        img3.style.opacity = '0';
        img3.style.transform = 'translateX(100%)';
        img1.style.transform = 'translateX(-100%)';
        img2.style.transform = 'translateX(0%)';
        img2.style.opacity = '1'
    } else if (currentIndex == 2) {
        img1.style.opacity = '0';
        img1.style.transform = 'translateX(100%)';
        img2.style.transform = 'translateX(-100%)';
        img3.style.transform = 'translateX(0%)';
        img3.style.opacity = '1';
    } else {
        img2.style.opacity = '0';
        img2.style.transform = 'translateX(100%)';
        img3.style.transform = 'translateX(-100%)';
        img1.style.transform = 'translateX(0%)';
        img1.style.opacity = '1';
    }
}

setInterval(showNextImage, 10000);


function redirect(page) {
    window.location.href = `../html/${page}.html`
}

// document.addEventListener("scroll", function() {
//     var header = document.querySelector("header");
//     if (window.scrollY > 0) {
//         header.style.background = ' #03063A'
//     } else {
//         header.style.background = 'none'
//     }
// });


//Animação da logo
// var logo = document.querySelector('#logo-header');
// var words = ["Ngg", "NggFLix", "moovie","BrasFlix","ClipCloud", "Undefined"];
// var currentWordIndex = 0;

// function animateText() {
//     var currentWord = words[currentWordIndex];
//     var text = currentWord.substring(0, logo.textContent.length + 1); 

//     logo.textContent = text;
//     if (currentWord === "Undefined"){
//         logo.style.color = '#fff'
//         logo.style.textShadow = '0 0 30px #fff'
//     } else {
//         logo.style.color = 'rgba(255, 255, 255, .4)'
//         logo.style.textShadow = 'none'
//         logo.style.transition = '0s'
//     }
//     if (text === currentWord) {
//         if (currentWord === "Undefined"){
//             setTimeout(eraseText, 10000);
//         } else {
//             setTimeout(eraseText, 1000);
//         }
//     } else {
//         setTimeout(animateText, 80);
//     }

// }

// function eraseText() {
//     var text = logo.textContent;
//     logo.textContent = text.substring(0, text.length - 1);

//     if (text.length === 0) {
//         currentWordIndex = (currentWordIndex + 1) % words.length;
//         setTimeout(animateText, 500);
//     } else {
//         setTimeout(eraseText, 50);
//     }
// }

//animateText();