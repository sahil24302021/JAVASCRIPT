let divs = document.querySelectorAll("#parent div");
let player1 = "x";
let player2 = "o";
let turn = 0;
let winner = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
let p1moves = [];
let p2moves = [];
let gameOver = false;
divs.forEach((d, i) => {
    d.id = i + 1;
});
function checkWinner(moves) {
    return winner.some(pattern =>
        pattern.every(num => moves.includes(num))
    );
}
function resetGame() {
    divs.forEach(d => {
        d.innerText = "";
        d.classList.remove("x", "o");
    });
    p1moves = [];
    p2moves = [];
    turn = 0;
    gameOver = false;
}
divs.forEach(d => {
    d.addEventListener("click", () => {
        if (d.innerText !== "" || gameOver) return;
        let id = parseInt(d.id);
        if (turn === 0) {
            d.innerText = player1;
            d.classList.add("x");
            p1moves.push(id);
            if (checkWinner(p1moves)) {
                gameOver = true;
                alert("🎉 Player X wins!");
                resetGame();
                return;
            }
            turn = 1;
        } else {
            d.innerText = player2;
            d.classList.add("o");
            p2moves.push(id);
            if (checkWinner(p2moves)) {
                gameOver = true;
                alert("🎉 Player O wins!");
                resetGame();
                return;
            }
            turn = 0;
        }
        if (p1moves.length + p2moves.length === 9) {
            gameOver = true;
            alert("😐 It's a draw!");
            resetGame(); 
        }
    });
});


