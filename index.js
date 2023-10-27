function resetGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white';
    })
}

function createGrid() {
    const $grid = document.querySelector('.grid');
    for(let i=0; i<256; i++) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('pixel');
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = 'black'
        })
        newDiv.style.width = '20px';
        newDiv.style.height = '20px';
        $grid.appendChild(newDiv);
    }
}

function init() {
    createGrid()
    const $resetButton = document.querySelector('.reset-button');
    $resetButton.addEventListener('click', resetGrid);
}

init()