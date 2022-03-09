
const elements = [
    { buttonText: 'Button 1' },
    { buttonText: 'Button 2' },
    { buttonText: 'Button 3' }
];
const parent = document.querySelector('#button-container');
for (let i = 0; i < clues.length; i++) {
    let button = document.createElement('button');
    button.innerHTML = clues[i].buttonText;
    parent.appendChild(button);
}
// function makeGrid(rows, clms) {
//     container.style.setProperty('--grid-rows', rows);
//     container.style.setProperty('--grid-cols', clms);
//     for (c = 0; c < (rows * clms); c++) {
//         let cell = document.createElement('div');
//         cell.innerText = (c + 1);
//         container.appendChild(cell).className = 'grid-item';
//     };
// };

// makeGrid(5, 6);