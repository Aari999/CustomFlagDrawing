const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const width=canvas.width
const height=canvas.height
  
function drawZrectangles(x1, y1, x2, y2) {
  drawLine(x1, y1, x2, y1); 
  drawLine(x1, y2, x2, y2);
  drawLine(x1, y1, x1, y2);
  drawLine(x2, y1, x2, y2);
}

function drawLine(x0, y0, x1, y1, color){
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const xinc = x0 < x1 ? 1 : -1;
    const yinc = y0 < y1 ? 1 : -1;
    let p = dx - dy;

    while (true) {
        plotPixel(x1, y1);
        ctx.fillStyle = color;
        ctx.fillRect(x0, y0, 1, 1);
        if (x0 === x1 && y0 === y1) break;
        const e2 = 2 * p;
        if (e2 > -dy) { p -= dy; x0 += xinc;}
        if (e2 < dx) { p += dx; y0 += yinc; }
    }
}
function plotPixel(x, y) {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 1, 1);
}

function drawAlgerianFlag() {
    const width = 680;
    const height = 479;
    drawZrectangles(0, 0, width / 2, height, 'rgba(0, 110, 0, 1)');
    drawZrectangles(width / 2, 0, width / 2, height,'rgba(255,255,255,1)' );


    const moonCenterX = width / 3 + 90;
    const moonCenterY = height / 2;
    const moonRadius = height / 4;
    const smallerMoonRadius = moonRadius * 0.79; 

    for (let i = 25; i <= 332; i += 1) {
        const angle = (i * Math.PI) / 180;
        const x = moonCenterX + moonRadius * Math.cos(angle);
        const y = moonCenterY + moonRadius * Math.sin(angle);
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.fillRect(Math.round(x), Math.round(y), 1, 1);

        for(let k = 1; k<=30; k+= 1){
            ctx.fillRect(Math.round(x+1), Math.round(y), 1, 1);
            ctx.fillRect(Math.round(x-1), Math.round(y), 1, 1);
            ctx.fillRect(Math.round(x), Math.round(y+1), 1, 1);
            ctx.fillRect(Math.round(x), Math.round(y-1), 1, 1);
        }
    }
    

    for (let i = 29; i <= 324; i += 1) {
        const angle = (i * Math.PI) / 180;
        const smallerX = moonCenterX + smallerMoonRadius * Math.cos(angle) + 28;
        const smallerY = moonCenterY + smallerMoonRadius * Math.sin(angle);
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.fillRect(Math.round(smallerX), Math.round(smallerY), 1, 1);

        for(let j = 2; j<=30; j+= 2){
            ctx.fillRect(Math.round(smallerX+1), Math.round(smallerY), 1, 1);
            ctx.fillRect(Math.round(smallerX-1), Math.round(smallerY), 1, 1);
            ctx.fillRect(Math.round(smallerX), Math.round(smallerY+1), 1, 1);
            ctx.fillRect(Math.round(smallerX), Math.round(smallerY-1), 1, 1);
        }
    }
    function isSameColor(color1, color2) {
        return (
          color1[0] === color2[0] &&
          color1[1] === color2[1] &&
          color1[2] === color2[2] &&
          color1[3] === color2[3]
        );
      }

      function boundaryFill(x, y, fillColor, boundaryColor) {
        const imageData = ctx.getImageData(x, y, 1, 1);
        const pixel = imageData.data;
        ctx.fillStyle = `rgba(${fillColor[0]}, ${fillColor[1]}, ${fillColor[2]}, ${fillColor[3] / 255
            })`;
    
        if (!isSameColor(pixel, boundaryColor) && !isSameColor(pixel, fillColor)) {
            ctx.fillRect(x, y, 1, 1);
             setTimeout(() => {
                boundaryFill(x - 1, y, fillColor, boundaryColor);
                boundaryFill(x + 1, y, fillColor, boundaryColor);
                boundaryFill(x, y - 1, fillColor, boundaryColor);
                boundaryFill(x, y + 1, fillColor, boundaryColor);
            }, -15);
        }
    }
    
    let x = 70;
    let y = 200;
    boundaryFill(x, y, [0, 110, 0, 255], [255, 0, 0, 255]);

    let x0 = 290;
    let y0 = 200;
    boundaryFill(x0, y0, [0, 110, 0, 255], [255, 0, 0, 255]);

    let x1 = 250;
    let y1 = 200;
    boundaryFill(x1, y1, [255, 0, 0, 255], [255, 0, 0, 255]);

    let x2 = 370;
    let y2 = 140;
    boundaryFill(x2, y2, [255, 0, 0, 255], [255, 0, 0, 255]);

    let x4 = 370;
    let y4 = 345;
    boundaryFill(x4, y4, [255, 0, 0, 255], [255, 0, 0, 255]);

    let x5 = 370;
    let y5 = 250;
    boundaryFill(x5, y5, [255, 0, 0, 255], [255, 0, 0, 255]);

    let x6 = 370;
    let y6 = 240;
    boundaryFill(x6, y6, [255, 0, 0, 255], [255, 0, 0, 255]);

    let x7 = 390;
    let y7 = 210;
    boundaryFill(x7, y7, [255, 0, 0, 255], [255, 0, 0, 255]);

    let x8 = 360;
    let y8 = 220;
    boundaryFill(x8, y8, [255, 0, 0, 255], [255, 0, 0, 255]);

    let x9 = 430;
    let y9 = 235;
    boundaryFill(x9, y9, [255, 0, 0, 255], [255, 0, 0, 255]);

    let x10 = 400;
    let y10 = 260;
    boundaryFill(x10, y10, [255, 0, 0, 255], [255, 0, 0, 255]);
      
    const starCenterX = width * (2 / 3) - 62;
    const starCenterY = height / 2;
    const starRadius = height / 8;
    const angleOffset = (Math.PI / 2) - (Math.PI / 5) + 0.29;

    for (let i = 0; i < 5; i++) {
        const x0 = starCenterX + starRadius * Math.cos(i * 2 * Math.PI / 5 + angleOffset);
        const y0 = starCenterY + starRadius * Math.sin(i * 2 * Math.PI / 5 + angleOffset);
        const x1 = starCenterX + starRadius * Math.cos((i + 2) * 2 * Math.PI / 5 + angleOffset);
        const y1 = starCenterY + starRadius * Math.sin((i + 2) * 2 * Math.PI / 5 + angleOffset);
        drawLine(Math.round(x0), Math.round(y0), Math.round(x1), Math.round(y1), 'rgba(255, 0, 0, 1)');
    }
    
}
drawAlgerianFlag();