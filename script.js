const correctAnswers = ['A', 'A', 'A', 'A', 'A'];

const quizApp = document.querySelector('form');
const quizScore = document.querySelector('.quiz-score');
const submitButton = document.querySelector('input[type="submit"]');

quizApp.addEventListener('submit', (e)=>{
    e.preventDefault();

    let score = 0;

    const userAnswer = [quizApp.question1.value, quizApp.question2.value, quizApp.question3.value, quizApp.question4.value, quizApp.question5.value];

    userAnswer.forEach((ans, index)=>{
        if(ans === correctAnswers[index]){
            score += 20;
        }
    });

    console.log(score);
    scrollTo(0,0);
    quizScore.classList.remove('hidden');

    let scoreOutput = 0
    const quizAnimation = setInterval(()=>{
        quizScore.querySelector('.actual-score').textContent = `${scoreOutput}%`;
        if(scoreOutput === score){
            clearInterval(quizAnimation);
        } else{
            scoreOutput++
        }
    }, 30);


    quizApp.reset();
    submitButton.setAttribute("disabled", "disabled");


});