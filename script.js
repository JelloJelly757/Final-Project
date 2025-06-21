let button2 = document.querySelector('[type="button2"]'); 

let gotoquizFunction = () =>{
    button2.addEventListener('click', () =>
    window.location.href = "destination.html")
}; 

gotoquizFunction(); 

let button3 = document.querySelector('[type="button3"]'); 

let gotogalleryFunction = () =>{
    button3.addEventListener('click', () =>
    window.location.href = "gallery.html")
}; 

gotogalleryFunction();


let questionList = ['Which hockey player is from Nova Scotia?', 'Which hockey player likes Jimmy Buffet?', 'Which hockey player is an American traitor?', 'Which hockey player is always serious?', 'Which hockey player is a silly-goofy guy according to his interests?']; 
let answerList = ['Sidney Crosby', 'Patrick Kane', 'Thomas Harley', 'Jonathan Toews', 'Jeff Skinner']; 
let score = 0; 
let questionIndex = 0; 

const question = document.querySelector('.questioncon'); 
const button = document.querySelector('button'); 
const input = document.querySelector('#input-field'); 
let scoreContainer = document.querySelector('.scorecon');

question.textContent = questionList[questionIndex];

let submitFunction = () =>{
    button.addEventListener('click', () =>
    {if(input.value === answerList[questionIndex]){
            questionIndex += 1; 
            score += 1; 
            question.textContent = questionList[questionIndex]; 
            scoreContainer.textContent = "Score: " + score; 
        }else{
            score -= 1;  
            scoreContainer.textContent = "Score: " + score;
        }
        //PUT ENDGAME FUNCTION HERE
        endGame();
    });
}

let endGame = () =>{
    if(questionIndex > 4){
        scoreContainer.textContent = "Final Score: " + score; 
        question.textContent = "Congratulations, play again!"; 
        input.style.display = "none"; 
        button.style.display = "none"; 
    }
}

submitFunction();

document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}); 


