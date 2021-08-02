// Your code here
var dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

// document.addEventListener("keydown", function(e) {
//     // console.log(e.key); ArrowLeft, ArrowRight, ArrowUp, ArrowDown
//     if (e.key === "ArrowLeft") {
//         let leftNumbers = dodger.style.left.replace("px", "");
//         let left = parseInt(leftNumbers, 10);
//         dodger.style.left = `${left, - 1}px`;
//     }
// });

// let dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) { 
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    // if (left < (document.getElementById("game").offsetWidth) - (dodger.offsetWidth))  {
        if (left > 0) { 
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});