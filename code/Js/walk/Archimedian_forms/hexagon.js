const fs = require('fs');

// A4 dimensions in px
const A4_WIDTH = 793;
const A4_HEIGHT = 1123;

// Initialize turtle position
let x = A4_WIDTH / 2;
let y = A4_HEIGHT / 2;
let angle = 0;

let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${A4_WIDTH}" height="${A4_HEIGHT}" viewBox="0 0 ${A4_WIDTH} ${A4_HEIGHT}">`;

function walk(i) {
    const newX = x + Math.cos(angle) * (i / 4);
    const newY = y + Math.sin(angle) * (i / 4);

    svgContent += `<line x1="${x}" y1="${y}" x2="${newX}" y2="${newY}" stroke="black" stroke-width="1"/>`;

    x = newX;
    y = newY;

    angle += 60.15 * Math.PI / 180;

    return i < 395;
}

let i = 0;
function animate() {
    if (walk(i)) {
        i++;
        animate();
    } else {
        svgContent += `</svg>`;
        const name = 'hexagon_archimedian_spiral.svg'
        fs.writeFile( name, svgContent, (err) => {
            if (err) throw err;
            console.log('SVG file has been saved >>> ', name);
        });
    }
}

animate();
