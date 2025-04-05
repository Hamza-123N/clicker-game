let score = 0;
let clickPower = 1;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('click-button');
const dubblePotion = document.getElementById('2x-potion');
const fivePotion = document.getElementById('5x-potion');
const tenPotion = document.getElementById('10x-potion');
const buyEmerald = document.getElementById('buy-emerald');
const winMessage = document.getElementById('win-message');
const multiplierLabel = document.getElementById('multiplier-label');

const clickSound = document.getElementById('click-sound');
const buySound = document.getElementById('buy-sound');
const winSound = document.getElementById('win-sound');

// Load saved progress


clickButton.addEventListener('click', () => {
  score += clickPower;
  scoreDisplay.textContent = score;
  animateClick();
  clickSound.play();
  saveProgress();
});

dubblePotion.addEventListener('click', () => {
  if (score >= 300) {
    score -= 300;
    clickPower = 2;
    updateMultiplierLabel();
    scoreDisplay.textContent = score;
    alert('You bought a 2X Potion! Clicks are now worth 2.');
    buySound.play();
    saveProgress();
  } else {
    alert('Not enough clicks to buy the 2X potion.');
  }
});

fivePotion.addEventListener('click', () => {
  if (score >= 1000) {
    score -= 1000;
    clickPower = 5;
    updateMultiplierLabel();
    scoreDisplay.textContent = score;
    alert('You bought a 5X Potion! Clicks are now worth 5.');
    buySound.play();
    saveProgress();
  } else {
    alert('Not enough clicks to buy the 5X potion.');
  }
});

tenPotion.addEventListener('click', () => {
  if (score >= 10000) {
    score -= 10000;
    clickPower = 15;
    updateMultiplierLabel();
    scoreDisplay.textContent = score;
    alert('You bought a 15X Potion! Clicks are now worth 15.');
    buySound.play();
    saveProgress();
  } else {
    alert('Not enough clicks to buy the 15X potion.');
  }
});

buyEmerald.addEventListener('click', () => {
  if (score >= 100000) {
    score -= 100000;
    triggerWinAnimation();
    scoreDisplay.textContent = score;
    winSound.play();
    saveProgress();
  } else {
    alert('Not enough clicks to buy the Winner Emerald.');
  }
});


function animateClick() {
  clickButton.style.transform = 'scale(1.1)';
  setTimeout(() => {
    clickButton.style.transform = 'scale(1)';
  }, 100);
}

function saveProgress() {
  localStorage.setItem('clickerScore', score);
  localStorage.setItem('clickPower', clickPower);
}

function updateMultiplierLabel() {
  if (clickPower > 1) {
    multiplierLabel.textContent = `${clickPower}X Active`;
    multiplierLabel.style.display = 'block';
  } else {
    multiplierLabel.style.display = 'none';
  }
}

function triggerWinAnimation() {
    const container = document.createElement('div');
    container.className = 'win-animation';
  
    // Create sparkles
    for (let i = 0; i < 100; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = Math.random() * 100 + 'vw';
      sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
      sparkle.style.animationDuration = 2 + Math.random() * 2 + 's';
      sparkle.style.width = sparkle.style.height = Math.random() * 6 + 4 + 'px';
      container.appendChild(sparkle);
    }
  
    // Create emerald
    const emerald = document.createElement('div');
    emerald.className = 'emerald';
    container.appendChild(emerald);
  
    document.body.appendChild(container);
  
    // Optional cleanup after 10 seconds
    setTimeout(() => {
      container.remove();
    }, 10000);
  }
