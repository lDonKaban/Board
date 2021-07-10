const container = document.querySelector('.container'),
      SQUARES_NUMBER = 576,
      colors = [
      'rgb(120,28,129)',
      'rgb(64,67,153)',
      'rgb(72,139,194)',
      'rgb(107,178,140)',
      'rgb(159,190,87)',
      'rgb(210,179,63)',
      'rgb(231,126,49)',
      'rgb(217,33,32)'
    ],
      audio = new Audio();

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);

    square.addEventListener('mouseover', () => {
        getColor(square);
        playMusic();
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
        stopMusic();
    });
}

function getColor (tag) {
    const index = Math.floor(Math.random() * colors.length),
          color = colors[index];
          tag.style.backgroundColor = color;
          tag.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`; 
}

function removeColor (tag) {
    tag.style.backgroundColor = '#1d1d1d';
    tag.style.boxShadow = '0 0 2px #1d1d1d, 0 0 10px #1d1d1d';
}

function playMusic () {
    audio.src = '69880c1f5e57698.mp3'; 
    audio.play();
}

function stopMusic() {
    audio.stop();
}