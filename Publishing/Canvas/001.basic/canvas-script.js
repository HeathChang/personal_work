// const canvas = document.getElementById("hello-world-canvas");
// const context = canvas.getContext("2d"); // 스크립트가 랜더링 컨텍스트에 접근

// Blue Rect
// context.fillStyle= "blue";
// context.fillRect(10,40,30,70);
//
// context.fillStyle = "yellow"
// context.fillRect(50,30,60,30);

window.onload = () => {
    const canvas = document.getElementById("hello-world-canvas");
    const context = canvas.getContext("2d"); // 스크립트가 랜더링 컨텍스트에 접근

    context.beginPath(); //reset the context state.
    context.moveTo(30, 70) // starting point  of line.
    context.lineTo(130, 70) // end point of the line.
    context.stroke();
}