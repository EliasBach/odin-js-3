// Your main goal here is to have as little global code as possible. Try tucking as much as you can inside factories. 
// If you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.

const tttGame = (function () {
    let row1 = [".", ",", "."]
    let row2 = [",", ".", ","]
    let row3 = [".", ",", "."]
    let board = [row1, row2, row3]
    let move_counter = 0
    const markers = ["x", "o"]

    function playMove (box_id) {
        let row = box_id[0]
        let col = box_id[1]

        if (move_counter%2 == 0) {
            board[row][col] = markers[0]
        } else {
            board[row][col] = markers[1]
        }
        move_counter++

        console.log("b", checkWin())

        return board
    }

    function checkWin () {
        // win horizontal wins: 
        // marker in rowX[0] = rowX[1] = rowX[2] 
        board.forEach((row) => {
            if ((row[0] == row[1]) && (row[1] == row[2])){
                console.log("a")
                return true
            }
        })
        // win vertical wins: 
        // marker in row1[i] = row2[i] = row3[i]
        for (let i=0; i<3; i++) {
            if ((row1[i] == row2[i]) && (row2[i] == row3[i])) {
                return true
            } 
        }

        return false

        // win diagonal wins:
        // marker in row1[0/2] = row2[1] = row3[2/0]

        // if no: continue to ask for input
        // if yes: end game
    }

    function reset() {
        //reset game
    }

    return {board, playMove};
})();

tttGame.playMove("12")
tttGame.playMove("00")
tttGame.playMove("11")
tttGame.playMove("01")
tttGame.playMove("10")
tttGame.playMove("22")
console.table(tttGame.board)




function displaytttBoard (tttBoard) {
  // takes grid and displays in on the html page
}

