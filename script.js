let grid = document.querySelector(".container");

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
//trail
for (let i = 0;i<cells.length;i++){
    cells[i].addEventListener("mouseout",trail);
    function trail(e){
        cells[i].style.backgroundColor = "rgb("+e.clientX+","+e.clientY+",0)";
    }
    cells[i].addEventListener("mouseover",currentpos);
    function currentpos(){
        cells[i].style.backgroundColor = "cyan";
    }
}

}

let size = prompt("how big grid do you want?");
makeGrids(size);

//cleargrid 
function clearGrid(){
    for(let i = 0; i<cells.length;i++){
        cells[i].style.backgroundColor = "none";
    }
}
let body = document.querySelector("body");
body.addEventListener("mousemove",function(e){
body.style.backgroundColor = "rgb("+e.layerX+","+e.layerY+",123)";

})