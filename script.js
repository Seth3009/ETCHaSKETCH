const canvas = document.querySelector('.canvas');
const resetbtn = document.querySelector('.reset');
let isDrawing = false;


// Draw square inside canvas
function createSquare(){
  canvas.innerHTML = '';
  for(let i = 0; i < 256; i++){
    let div = document.createElement('div');
    div.classList.add('square');
    canvas.appendChild(div);
  }
}

const square = document.querySelector('div');
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

canvas.addEventListener('mousemove', (e) => {
  if(!isDrawing) return;
  e.target.classList.replace('square','color');
})

resetbtn.addEventListener('click', createSquare);

canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);


createSquare();