function resetGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white';
    })
}

function getRandomRGB() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
}

function setPixelColor(pixel, color) {
    pixel.style.backgroundColor = color;
}

function getDarkenedColor(previousColor) {
    const rgbValues = previousColor === 'white' 
                ? ['255','255','255'] : previousColor.slice(4, -1).split(',');
    const newValues = rgbValues.map(value => Math.max((Number(value) - 10), 0))
    return `rgb(${newValues[0]}, ${newValues[1]}, ${newValues[2]} )`
}

function updatePaintingMode(mode) {
    const $pixels = document.querySelectorAll('.pixel');
    if (mode === 'color') {
        $pixels.forEach(pixel => {
            pixel.onmouseover = () => setPixelColor(pixel, getRandomRGB())  
        })
        return
    } 
    
    else if (mode === 'default') { 
        $pixels.forEach(pixel => {
            pixel.onmouseover = () => setPixelColor(pixel, 'black')  
        })
        return
    }
    else if(mode === 'darkening') {
        $pixels.forEach(pixel => {
            pixel.onmouseover = () => setPixelColor(pixel, getDarkenedColor(pixel.style.backgroundColor))
        })
    }
}

function createGrid(gridSize = 256) {
    const $grid = document.querySelector('.grid');
    for(let i=0; i<gridSize; i++) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('pixel');
        newDiv.style.backgroundColor = 'rgb(255,255,255)'
        newDiv.onmouseover = () => setPixelColor(newDiv, 'black')

        const size = 320 / (Math.sqrt(gridSize))
        newDiv.style.width = `${size}px`;
        newDiv.style.height = `${size}px`;
        $grid.appendChild(newDiv);
    }
}

function changeGridSize() {
    const gridSize = document.querySelector('#grid-size-input').value;
    if (gridSize === '') return
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

    const $colorModeButton = document.querySelector('.color-mode-button');
    $colorModeButton.addEventListener('click', () => updatePaintingMode('color'))

    const $defaultModeButton = document.querySelector('.default-mode-button');
    $defaultModeButton.addEventListener('click', () => updatePaintingMode('default'))

    const $darkeningModeButton = document.querySelector('.darkening-mode-button')
    $darkeningModeButton.addEventListener('click', () => updatePaintingMode('darkening'))
}

init()