const express = require('express');
const fs = require('fs');

const router = express.Router();

const qPath = './data/matematica.json'


router.get('/', (req , res)=>{
    res.render('indexPage');
});

router.get('/random' , (req,res)=>{
    let random_number = getRandomNumberByJson( qPath ) ;
    
    res.redirect(`/q/${random_number}`);
})

router.get('/q/:id', (req , res )=>{
    const id = req.params.id ;
    const dataQuestion = getJsonByPath( qPath , id ) ;

    let correctJson = getCorrectJson( dataQuestion.correct );
    console.log(dataQuestion.question)
    res.render('questionPage' , {
        question : dataQuestion.question,
        A : "A - "+ dataQuestion.answers.A,//.replace('\n','---'),
        B : "B - "+ (dataQuestion.answers.B || ''),
        C : "C - "+ (dataQuestion.answers.C || ''),
        D : "D - "+ (dataQuestion.answers.D || ''),
        E : "E - "+ (dataQuestion.answers.E || ''),

        answerA : correctJson.answerA,
        answerB : correctJson.answerB,
        answerC : correctJson.answerC,
        answerD : correctJson.answerD,
        answerE : correctJson.answerE

    });

})


function getCorrectJson( correct_aswer ){
    if( correct_aswer == "A" ) {
        return {
            answerA : 'true',
            answerB : 'false',
            answerC : 'false',
            answerD : 'false',
            answerE : 'false',
        }
    }
    if( correct_aswer == "B" ) {
        return {
            answerA : 'false',
            answerB : 'true',
            answerC : 'false',
            answerD : 'false',
            answerE : 'false',
        }
    }
    if( correct_aswer == "C" ) {
        return {
            answerA : 'false',
            answerB : 'false',
            answerC : 'true',
            answerD : 'false',
            answerE : 'false',
        }
    }
    if( correct_aswer == "D" ) {
        return {
            answerA : 'false',
            answerB : 'false',
            answerC : 'false',
            answerD : 'true',
            answerE : 'false',
        }
    }
    if( correct_aswer == "E" ) {
        return {
            answerA : 'false',
            answerB : 'false',
            answerC : 'false',
            answerD : 'false',
            answerE : 'true',
        }
    }
}

function getRandomNumberByJson( path ) {
    const rawData = fs.readFileSync( path , 'utf-8') ;
    const data = JSON.parse(rawData) ;
    const size = data.questions.length

    return Math.floor( Math.random() * size ) ;
}

function getJsonByPath( path , id ) {
    const rawData = fs.readFileSync( path , 'utf-8' ) ;
    const data = JSON.parse(rawData) ;
    return data.questions[id];
}
module.exports = router;