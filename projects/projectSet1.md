# Projects Related To DOM

##  project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
//console.log("Raj")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (buttons) {
  console.log(buttons);
  buttons.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'violet') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'indigo') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'orange') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'red') {
        body.style.backgroundColor = e.target.id;
      }
  });
});

```

## project 2

```javascript


const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');
   const message = document.querySelector('#message')
   const bmi = (weight/((height*height)/10000)).toFixed(2);
   
   if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
   }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`
   }
   else{
    results.innerHTML =  `<span>${bmi}</span>`
    }
     if(bmi <= 18.6){
        message.innerHTML = "You are under-weight"
     } else if(bmi <= 24.9 && bmi >18.6){
        message.innerHTML = "Your weight is normal"
     }else{
        message.innerHTML = "You are over-weight"
    }

})

```

## project 3

```javascript

const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date()
    //console.log(date.toLocaleTimeString());    
   clock.innerHTML = date.toLocaleTimeString();
},1000)

```

## project 4

```javascript

let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess = parseInt(userInput.value)
      console.log(guess);
       validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }else if (guess<1) {
        alert('Please enter a number greater than 1')
    }else if (guess>100) {
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over, the number was : ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`Your Guess is right, the number was ${randomNumber}`)
        endGame()
    }else if(guess < randomNumber){
       displayMessage(`Number is TOO LOW`) 
    }
    else if(guess > randomNumber){
        displayMessage(`Number is TOO HIGH`) 
     }
}

function displayGuess(guess) {
    userInput.value =  ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame')  
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess = []
    numGuess =1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}


```

## project 5
```javascript

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i =0;i<6;i++){
       color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
    setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

document.querySelector('#start').addEventListener('click',startChangingColor)

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#stop').addEventListener('click',stopChangingColor)


```

## project 6

```javascript

const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
    insert.innerHTML = `
    <div class = 'color'>
    <table>
  <tr>
    <th>Key</th>
    <th>Key code</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " "?"Space":"e.key"}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})

```