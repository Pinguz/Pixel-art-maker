// Select color input
// Select size input
let canvas = document.getElementById("pixelCanvas");
let height = document.getElementById("inputHeight");
let weight = document.getElementById("inputWidth");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

color.addEventListener("click",function(){});

sizePicker.onsubimt = function(event){
  event.preventDefault();
  clearGrid();
  makeGrid();
};

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  for (let r=0;r<height.value;r++){
    const row = canvas.insertRow(r);
    for(let c=0; c<weight.value;c++){
      const cell = row.insertCell(c);
      cell.addEventListener("click",fillSquare);
    }
  }
}

function clearGrid(){
  while (canvas.firstChild){
    canvas.removeChild(canvan.firstChild);
  }
}

function fillSquare(){
  this.setAttribute("style",'background-color':${color.value});
}
