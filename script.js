const canvas = document.querySelector('.canvas');
const resetBtn = document.querySelector('.reset');
const sizebtn = document.querySelector('.resize');
const checkbox = document.querySelector("input[type=checkbox]");
let isDrawing = false;
let isChecked = false;
let hue = 0;


// Draw square inside canvas
function createSquare(){
  updateCanvas(16);
  canvas.innerHTML = '';
  for(let i = 0; i < 256; i++){
    let div = document.createElement('div');
    div.classList.add('square');
    canvas.appendChild(div);
  }
  clearCanvas();
}

const square = document.querySelector('div');
function updateCanvas(num) {
  canvas.innerHTML = "";
  canvas.style.setProperty(
    "grid-template-columns",
    `repeat(${num}, 2fr)`
  );
  canvas.style.setProperty(
    "grid-template-rows",
    `repeat(${num}, 2fr)`
  );
  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    canvas.appendChild(div);
  }
  console.log(num);
};

canvas.addEventListener('mousemove', (e) => {
  if(!isDrawing) return;
  if(!isChecked) {
    e.target.classList.replace('square','black');
  } else {
    `hsl(${hue}, 100%, 50%)`;
    e.target.classList.replace('square','color')
    e.target.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    hue++;
    if (hue >= 360) {
      hue = 0;
    }
  }
})


function clearCanvas(){
  canvas.classList.add('shake');
  canvas.addEventListener('animationend', function(){
    console.log('done shaking');
    canvas.classList.remove('shake');
  }, { once: true });
}

function resizeCanvas(){
  let num = parseInt(prompt("Please enter a number from 1 to 100", ""));
  if(num > 0 && num < 101){
    updateCanvas(num);
  } else {
    alert("Number must be between 1 and 100");
    resizeCanvas();
  }
}

checkbox.addEventListener('change', function() {
  if (this.checked) {
    isChecked = true;
  } else {
    isChecked = false;
  }
});


resetBtn.addEventListener('click', createSquare);
sizebtn.addEventListener('click', resizeCanvas);

canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);


createSquare();