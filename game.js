var canvas = document.getElementById('game-canvas');
var context = canvas.getContext('2d');

function update() {
  // Update game state
}

function render() {
  // Render game
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
