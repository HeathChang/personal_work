// const canvas = document.getElementById("hello-world-canvas");
// const context = canvas.getContext("2d"); // 스크립트가 랜더링 컨텍스트에 접근

// Blue Rect
// context.fillStyle= "blue";
// context.fillRect(10,40,30,70);
//
// context.fillStyle = "yellow"
// context.fillRect(50,30,60,30);

// 2. draw a line
// window.onload = () => {
//     const canvas = document.getElementById("hello-world-canvas");
//     const context = canvas.getContext("2d"); // 스크립트가 랜더링 컨텍스트에 접근
//
//     context.beginPath(); //reset the context state.
//     context.strokeStyle = 'red' // color of line
//     context.lineWidth = 10; // width of line
//     context.moveTo(30, 70) // starting point  of line.
//     context.lineTo(130, 70) // end point of the line.
//
//     context.stroke(); // draw a line
// }

// 3. multiple line : zig-zag
// window.onload = () => {
//     const canvas = document.getElementById("hello-world-canvas");
//     const context = canvas.getContext("2d"); // 스크립트가 랜더링 컨텍스트에 접근
//
//     // context.beginPath(); //reset the context state.
//     // context.moveTo(30, 30) // starting point  of line.
//     // context.lineTo(80, 80) // end point of the line.
//     // context.stroke(); // draw a line
//     //
//     // context.beginPath(); //reset the context state.
//     // context.moveTo(80, 80) // starting point  of line.
//     // context.lineTo(130, 30) // end point of the line.
//     // context.stroke(); // draw a line
//     //
//     // context.beginPath(); //reset the context state.
//     // context.moveTo(130, 30) // starting point  of line.
//     // context.lineTo(180, 80) // end point of the line.
//     // context.stroke(); // draw a line
//     //
//     //
//     // context.beginPath(); //reset the context state.
//     // context.moveTo(180, 80) // starting point  of line.
//     // context.lineTo(230, 30) // end point of the line.
//     // context.stroke(); // draw a line
//
//
//     // another way: by using lineTo, able to draw consecutive line.
//     context.beginPath(); //reset the context state.
//     context.moveTo(30, 30)
//     context.lineTo(80, 80)
//     context.lineTo(130, 30)
//     context.lineTo(180, 80)
//     context.lineTo(230, 30)
//
//     context.stroke(); // draw a line
//
// }


// 6. Line Caps : similar to border radius
// window.onload = () => {
//     const canvas = document.getElementById("hello-world-canvas");
//     const context = canvas.getContext("2d");
//
//     context.beginPath();
//     context.strokeStyle = 'red';
//     context.lineWidth = 10;
//     context.moveTo(100, 100);
//     context.lineTo(300, 100)
//     // context.lineCap = 'butt'; // default
//     // context.lineCap = 'round'; // border-radius: 15px
//     context.lineCap = 'square';  // square is added
//     context.stroke();
//
// }

//7. Line joins: context.lineJoin : 라인과 라인이 만나는 점
// window.onload = () => {
//     const canvas = document.getElementById("hello-world-canvas");
//     const context = canvas.getContext("2d");
//
//     context.beginPath();
//     context.strokeStyle = 'red';
//     context.lineWidth = 10;
//
//     context.moveTo(100, 100);
//     context.lineTo(130, 100)
//     context.lineTo(130, 130)
//     // context.lineJoin = 'miter' // 직각
//     // context.lineJoin = 'bevel' // 삼각형 잘림
//     context.lineJoin = 'round' // 둥근형
//     context.stroke();
// }

//7. shadows
// window.onload = () => {
//     const canvas = document.getElementById("hello-world-canvas");
//     const context = canvas.getContext("2d");
//
//     context.beginPath();
//     context.strokeStyle = 'red';
//     context.lineWidth = 10;
//
//
//     context.shadowColor = 'black';
//     context.shadowOffsetX = 5; // x 좌표
//     context.shadowOffsetY = 5; // y 좌표
//     context.shadowBlur = 4;
//
//
//     context.moveTo(100, 100);
//     context.lineTo(130, 100);
//     context.stroke();
// }


// 8. draw complex shapes
// window.onload = function () {
//
//     // Definitions
//     const canvas = document.getElementById("hello-world-canvas");
//     const context = canvas.getContext("2d");
//
//
// // First Z Object
//     context.beginPath();
//     context.strokeStyle = "red";
//     context.lineWidth = 15;
//     context.lineCap = "butt";
//     context.lineJoin = "miter";
//     context.shadowColor = "blue";
//     context.shadowOffsetX = 10;
//     context.shadowOffsetY = 10;
//     context.shadowBlur = 10;
//     context.moveTo(60, 80);
//     context.lineTo(160, 80);
//     context.lineTo(80, 180);
//     context.lineTo(180, 180);
//     context.stroke();
//
// // Second Z Object
//     context.beginPath();
//     context.strokeStyle = "blue";
//     context.lineWidth = 15;
//     context.lineCap = "round";
//     context.lineJoin = "round";
//     context.shadowColor = "yellow";
//     context.shadowOffsetX = 10;
//     context.shadowOffsetY = 10;
//     context.shadowBlur = 10;
//     context.moveTo(340, 80);
//     context.lineTo(240, 80);
//     context.lineTo(340, 180);
//     context.lineTo(240, 180);
//     context.stroke();
//
// // Third Z Object
//     context.beginPath();
//     context.strokeStyle = "green";
//     context.lineWidth = 15;
//     context.lineCap = "square";
//     context.lineJoin = "bevel";
//     context.shadowColor = "red";
//     context.shadowOffsetX = 10;
//     context.shadowOffsetY = 10;
//     context.shadowBlur = 10;
//     context.moveTo(420, 80);
//     context.lineTo(520, 80);
//     context.lineTo(440, 180);
//     context.lineTo(540, 180);
//     context.stroke();
//
//
// }


// 2. arc
// window.onload = () => {
//
//     // Definitions
//     var canvas = document.getElementById("hello-world-canvas");
//     var context = canvas.getContext("2d");
//
//     var radian = Math.PI / 180;
//
//     // First Arc
//     context.beginPath();
//     context.strokeStyle = "blue";
//     context.lineWidth = 10;
//     context.arc(100, 100, 50, 0 * radian, 180 * radian, false);
//     context.stroke();
//
//     // Second Arc
//     context.beginPath();
//     context.strokeStyle = "red";
//     context.lineWidth = 10;
//     context.arc(300, 200, 50, 45 * radian, 130 * radian, false);
//     context.stroke();
//
//
//     // Third Arc
//     context.beginPath();
//     context.strokeStyle = "green";
//     context.lineWidth = 10;
//     context.arc(300, 100, 50, 45 * radian, 130 * radian, true);
//     context.stroke();
// }


//  curve
// window.onload = () => {
//
//     // Definitions
//     var canvas = document.getElementById("hello-world-canvas");
//     var context = canvas.getContext("2d");
//
//
//     context.beginPath();
//     context.strokeStyle = "blue";
//     context.lineWidth = 10;
//     context.moveTo(200, 250)
//     // cp => control point
//     context.quadraticCurveTo(300, 100, 400, 250)
//     context.stroke();
//
// }


// cubic curve
window.onload = () => {

    // Definitions
    var canvas = document.getElementById("hello-world-canvas");
    var context = canvas.getContext("2d");


    context.beginPath();
    context.strokeStyle = "blue";
    context.lineWidth = 10;
    context.moveTo(200, 250)
    // controlX1, controly1, controlx2, controly2, endx, endy (2 points and end point)
    context.bezierCurveTo(200, 10, 50, 150, 400, 250)
    context.stroke();

    // mark control points
    context.beginPath();
    context.arc(200, 250, 5, 0, 2 * Math.PI); // circle at first control point
    context.arc(200, 10, 5, 0, 2 * Math.PI); // circle at first control point
    context.fillStyle = "red";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(50, 150, 5, 0, 2 * Math.PI); // circle at second control point
    context.arc(400, 250, 5, 0, 2 * Math.PI); // circle at first control point
    context.fillStyle = "green";
    context.fill();
    context.closePath();

}