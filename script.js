let grid = document.querySelector(".container");
let colorPick = document.getElementById("myColor").value;

grid.style.display = "grid";

gridItem = document.getElementsByClassName("grid-item");
let cells = [...gridItem];
//make grids
function makeGrids(gridSize = 16){

for (i=0;i<gridSize**2;i++){
    grid.style.gridTemplateColumns = "repeat("+gridSize+",auto)";
grid.style.gridTemplateRows = "repeat("+gridSize+",auto)";

  let cell = document.createElement("div");
      
      grid.appendChild(cell).className = "grid-item";

};

gridItem = document.getElementsByClassName("grid-item");
let cells = [...gridItem];

let mouse;

//trail
for (let i = 0;i<cells.length;i++){
    cells[i].addEventListener("dblclick",startPainting);
    cells[i].addEventListener("mouseout",trail);
    cells[i].addEventListener("click",stopPainting);
    function startPainting(){
        mouse = "drawing";
    }
    
    function trail(e){
        if (mouse == "drawing"){
        cells[i].style.backgroundColor = colorPick;
    }
}
function stopPainting(e){
    mouse = "notDrawing"
    cells[i].style.backgroundColor = colorPick;
}
    cells[i].addEventListener("mouseover",currentpos);
    function currentpos(){
        if (mouse == "drawing"){
        cells[i].style.backgroundColor = "cyan";
        }
    }
    
}

}

let size = prompt("how big grid do you want?");
makeGrids(size);


let body = document.querySelector("body");
body.addEventListener("mousemove",function(e){
body.style.backgroundColor = "rgb("+e.layerX+","+e.layerY+",123)";

})

function changeColor(){
    colorPick = document.getElementById("myColor").value;
    console.log(colorPick);
}