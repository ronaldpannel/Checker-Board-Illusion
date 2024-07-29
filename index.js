/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const button = document.querySelector("button");

ctx.strokeStyle = " black";
let size = 46;
let offSet = 0;
let color
let colorSelect = false

button.addEventListener("click", () => {
  colorSelect = !colorSelect
  console.log(colorSelect)
if(colorSelect == true){
  color = 'black'
}else{
  color = "lightblue"
}


  for (let y = 0; y <= canvas.height; y += size) {
    for (let x = 0; x <= canvas.width; x += size) {

      ctx.strokeStyle = color;
      if ((x / size) % 2 == 0) {
        ctx.fillStyle = "white";
      } else {
        ctx.fillStyle = color;
      }
      drawSquare(x - offSet, y, size);
    }
    offSet = size / 2 - offSet;
  }
});

function drawSquare(x, y, size) {
  ctx.fillRect(x, y, size, size);
  ctx.strokeRect(x, y, size, size);
  ctx.stroke();
}
window.addEventListener('resize', (e) => {
  canvas.width = e.target.innerWidth
  canvas.hasAttribute = e.target.innerHeight

})
