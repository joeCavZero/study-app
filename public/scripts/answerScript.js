const showCorrectButton = document.getElementById('showCorrectButton')
const answerElement = document.querySelectorAll('.true');
const falseAnswers = document.querySelectorAll('.false');



showCorrectButton.addEventListener('click', ()=>{
    answerElement[0].style.backgroundColor = '#aaffaa';

    for( let i = 0 ; i < falseAnswers.length ; i++ ){
        falseAnswers[i].style.backgroundColor = '#ffaaaa';
    }
});