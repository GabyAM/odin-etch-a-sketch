function createGrid() {
    const $grid = document.querySelector('.grid');
    for(let i=0; i<256; i++) {
        const newDiv = document.createElement('div')
        newDiv.addEventListener('hover', () => {
            newDiv.style.backgroundColor = 'black'
        })
        newDiv.style.width = '10px';
        newDiv.style.height = '10px';
        $grid.appendChild(newDiv);
    }
}

createGrid()