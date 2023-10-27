function resetGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white';
    })
}

function getGridSize() {

}
function createGrid(gridSize = 256) {
    const $grid = document.querySelector('.grid');
    for(let i=0; i<gridSize; i++) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('pixel');
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = 'black'
        })

        const size = 320 / (Math.sqrt(gridSize))
        newDiv.style.width = `${size}px`;
        newDiv.style.height = `${size}px`;
        $grid.appendChild(newDiv);
    }
}

function changeGridSize() {
    const gridSize = document.querySelector('#grid-size-input').value;

    const $grid = document.querySelector('.grid');
    $grid.innerHTML = '';
    createGrid(Math.pow(gridSize, 2));
}

function init() {
    createGrid()
    const $resetButton = document.querySelector('.reset-button');
    $resetButton.addEventListener('click', resetGrid);

    const $changeSizeButton = document.querySelector('.change-size-button');
    $changeSizeButton.addEventListener('click', changeGridSize)
}

init()