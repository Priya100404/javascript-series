const random=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector.querySelector('.lastResult');
const lowOrHigh=document.querySelector('lowOrHI');
const startover=document.querySelector('lowOrHI.resultParas');
const p=document.createElement('p')
let prevGuess=[]
let numguess=1;
let playGame=true;
function validateGuess(guess)

