const circle = document.getElementById('circle');
const gameArea = document.getElementById('game-area');
const reactionTime = document.getElementById('reaction-time');
const body = document.body;

let startTime;

// Generate random pastel background
function randomBackground() {
  const colors = [
    ['#ff9a9e', '#fad0c4'],
    ['#a1c4fd', '#c2e9fb'],
    ['#fbc2eb', '#a6c1ee'],
    ['#84fab0', '#8fd3f4'],
    ['#fccb90', '#d57eeb']
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Generate random 3D-like gradient for circle
function randomCircleGradient() {
  const colorPairs = [
    ['#ff4e50', '#f9d423'],
    ['#00c6ff', '#0072ff'],
    ['#f7971e', '#ffd200'],
    ['#a18cd1', '#fbc2eb'],
    ['#43cea2', '#185a9d']
  ];
  return colorPairs[Math.floor(Math.random() * colorPairs.length)];
}

function showCircle() {
  const maxX = gameArea.clientWidth - circle.offsetWidth;
  const maxY = gameArea.clientHeight - circle.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.display = 'block';

  // Update background
  const [bg1, bg2] = randomBackground();
  body.style.background = `linear-gradient(135deg, ${bg1}, ${bg2})`;

  // Update circle style
  const [c1, c2] = randomCircleGradient();
  circle.style.background = `radial-gradient(circle at 30% 30%, ${c1}, ${c2})`;

  startTime = Date.now();
}

function startGame() {
  const delay = Math.random() * 2000 + 1000; // 1–3 seconds
  circle.style.display = 'none';
  setTimeout(showCircle, delay);
}

circle.addEventListener('click', () => {
  const endTime = Date.now();
  const timeTaken = endTime - startTime;
  reactionTime.textContent = timeTaken;
  startGame();
});

startGame();
