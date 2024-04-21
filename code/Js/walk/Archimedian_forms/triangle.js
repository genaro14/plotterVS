const fs = require('fs');

// User-defined parameters
const A4_WIDTH = 793;
const A4_HEIGHT = 1123;
const numberOfLoops = 44; // Number of loops in the spiral
const incrementValue = 2.09; // Increment factor determining the spiral shape
const fineIV = 0; // Fine tune incrementValue

const maxObjectSize = 190; // in mm
const xOffset = A4_WIDTH / 2;
const yOffset = A4_HEIGHT / 2;
const canvasSize = Math.min(A4_WIDTH, A4_HEIGHT); 
const sizeFactor = (maxObjectSize / canvasSize) * 4; // Adjust the size factor based on the conversion factor

let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${A4_WIDTH}" height="${A4_HEIGHT}" viewBox="0 0 ${A4_WIDTH} ${A4_HEIGHT}">`;

function generateArchimedeanSpiralPath(loops, increment, spiralSize, xOffset, yOffset) {
    let path = '';
    for (let angle = 0; angle < loops * 2 * Math.PI; angle += increment) {
        const radius = angle * spiralSize;
        const x = radius * Math.cos(angle) + xOffset;
        const y = radius * Math.sin(angle) + yOffset;
        path += `L ${x} ${y} `;
    }
    return path;
}

const spiralPath = generateArchimedeanSpiralPath(numberOfLoops, incrementValue + fineIV, sizeFactor, xOffset, yOffset);

svgContent += `<path d="M ${xOffset} ${yOffset} ${spiralPath}" fill="none" stroke="black" stroke-width="1"/>`;
svgContent += `</svg>`;

const filename = 'triangle_archimedean_spiral.svg';
fs.writeFile(filename, svgContent, (err) => {
    if (err) throw err;
    console.log('SVG file has been saved >>> ', filename);
});
