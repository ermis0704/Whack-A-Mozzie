const square = document.querySelectorAll('.square');
const mozzie = document.querySelectorAll('.mozzie');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;
let hitPosition;

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mozzie')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mozzie');

  //assign the id of the randomPostion to hitPosition for us to use later
  hitPosition = randomPosition.id
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
      id.classList.remove('mozzie');
    }
  })
})


function moveMozzie() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

moveMozzie();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if(currentTime === 0) {
    clearInterval(timerId);
    alert('GAME OVER! You caught ' + result + ' mozzies');
  }
}

let timerId = setInterval(countDown, 1000);

















