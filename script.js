const gridSize = document.querySelector('#grid-size');
const userInput = Number(gridSize.value);
const resizeGrid = document.querySelector('#resize-grid');
const container = document.querySelector('#container');

function gridCreator (event) {
    for (let i = 0; i < userInput * userInput; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = "0"
    container.appendChild(square)    
}
}

const resizeGridEvent = resizeGrid.addEventListener("click", (event) => {});

gridCreator(resizeGridEvent);