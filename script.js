function createGrid() {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    let gridSize = prompt('Enter the number of squares per side (max 100):', 16);
    gridSize = Math.min(Math.max(parseInt(gridSize), 1), 100);

    const squareSize = container.clientWidth / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        let darkenAmount = 0;

        square.addEventListener('mouseenter', () => {
            const randomColor = getRandomColor();
            let rgbValues = square.style.backgroundColor.match(/\d+/g).map(Number);
            
            rgbValues = rgbValues.map(value => Math.max(value - darkenAmount, 0));
            square.style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;

            darkenAmount += 25.5;
        });

        container.appendChild(square);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

createGrid();
