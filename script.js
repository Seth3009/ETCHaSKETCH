const canvas = document.querySelector('.canvas');


// Draw square inside canvas
function createSquare(){
  for(let i = 0; i < 256; i++){
    let div = document.createElement('div');
    div.classList.add('square');
    canvas.appendChild(div);
  }
}

function updateCanvas() {
  canvas.innerHTML = "";
  canvas.style.setProperty(
    "grid-template-columns",
    `repeat(${16}, 2fr)`
  );
  canvas.style.setProperty(
    "grid-template-rows",
    `repeat(${16}, 2fr)`
  );
  for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    canvas.appendChild(div);
  }
  console.log(16);
};

canvas.addEventListener('mousedown', (e) => {
  e.target.classList.replace('square','color');
})
createSquare();