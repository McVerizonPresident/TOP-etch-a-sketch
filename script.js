const gridSize = document.querySelector('#grid-size');
const resizeGrid = document.querySelector('#resize-grid');
const container = document.querySelector('#container');


function gridCreator () {
    container.innerHTML = "";
    const userInput = Number(gridSize.value);
    for (let i = 0; i < userInput * userInput; i++) {
    const square = document.createElement('div');
    const squareSize = container.clientWidth / userInput;
    square.style.width = `${squareSize}px`
    square.style.height = `${squareSize}px`
    square.classList.add('square');
    container.appendChild(square)
}
}

resizeGrid.addEventListener("click", (event) => {
    gridCreator();
});

