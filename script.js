const gridSize = document.querySelector('#grid-size');
const resizeGrid = document.querySelector('#resize-grid');
const container = document.querySelector('#container');



function gridCreator () {

    
    container.innerHTML = "";
    const userInput = Number(gridSize.value);
    
    if (userInput > 100) {
        return;
    }

    const squareSize = (container.clientWidth - 2) / userInput;

    for (let i = 0; i < userInput * userInput; i++) {
    const square = document.createElement('div');
    
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.classList.add('square');
    container.appendChild(square);
    
}
}

resizeGrid.addEventListener("click", (event) => {
    gridCreator();
});

