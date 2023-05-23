

document.addEventListener("DOMContentLoaded", function() {
    createBoard(100);
})


function createBoard(size) {
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }
}


function getSize() {
    let input = prompt("What do you want the size of the board to be?");
    let message = document.querySelector("#message");
    if(input == "") {
        message.innerHTML = "Please provide a number";
    } else if(input < 0 || input > 100) {
        message.innerHTML = "Number must be between 1 and 100 inclusive";
    } else {
        message.innerHTML = "Now you can play";
    }
}