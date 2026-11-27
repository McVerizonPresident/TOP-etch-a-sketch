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


const squares = document.querySelectorAll('.square');

// Helper function to generate a random hex color
    function getRandomColor() {
      const randomHex = Math.floor(Math.random() * 16777215).toString(16);
      return `#${randomHex.padStart(6, '0')}`;
    }

// the mouseover event listener
container.addEventListener('mouseover', e => {
  // "e.target" holds the element being hovered, i.e the one that the mouse is over.
  const square = e.target;

  /* halt the function execution if:
  *     - the hovered element is not a box (it doesn't have the ".box" class
        - OR that box already has the ".blue" class
  */
    if (!square.classList.contains('square') || square.classList.contains('blue')) return;

  
    square.style.backgroundColor = "blue";
  // apply the ".blue" class to the hovered box
  square.add('blue');
});

resizeGrid.addEventListener("click", (event) => {
    gridCreator();
});

