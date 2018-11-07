const pixelCanvas = document.getElementById("pixelCanvas");
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const sizePicker = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");
const fragment = document.createDocumentFragment();
let color, gridHeight, gridWidth;

//提交按钮
sizePicker.addEventListener("submit", e => {
  e.preventDefault();
  gridHeight = inputHeight.value;
  gridWidth = inputWidth.value;
  makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  pixelCanvas.innerHTML = "";
  for (let i = 0;  i < gridHeight；i++) {
    const tr = document.createElement("tr");
    for(let j = 0; j < gridWidth; j++){
      const td = document.createElement("td");
      tr.appendChild(td);
    }
    fragment.appendChild(tr);
  }
  pixelCanvas.appendChild(fragment);
}
//事件委托 提升性能
pixelCanvas.addEventListener("click", e => {
  const event = e || window.event;
  const target = event.target || event.srcElement;

  if (target.nodeName.toLocaleLowerCase() === "td") {
    color = colorPicker.value;
    target.style.backgroundColor = color;
  }
});
//不需要了，浏览器可以自动完成
//function fillSquare(){
//  this.setAttribute('style','background-color: ${color.value}');
//}
