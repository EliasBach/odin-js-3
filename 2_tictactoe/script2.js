const TicTacToe = (function() {
    // private state
    let board = [
        [".", ",", "."],
        [",", "+", ","],
        [".", ",", "."]]
    let turncount = 0
    let markers = ["X", "O"]
    let win = false
    
    // private methods
    function getCurrentMarker() {
        return markers[turncount%2]
    }    

    function checkWin() {
        while (!win) {
            // check horizontal wins: 
            // marker in rowX[0] = rowX[1] = rowX[2] 
            board.forEach((row) => {
                if ((row[0] == row[1]) && (row[1] == row[2])){
                    win = true
                }
            })
            if(win) {break}
                
            // check vertical wins: 
            // marker in row1[i] = row2[i] = row3[i]
            row1 = board[0]; row2 = board[1]; row3 = board[2]
            for (let i=0; i<3; i++) {
                if ((row1[i] == row2[i]) && (row2[i] == row3[i])) {
                    win = true
                } 
            }
            if(win) {break}

            // check diagonal wins:
            // marker in row1[0/2] = row2[1] = row3[2/0]
            if ((row1[0] == row3[2]) && (row1[0] == row2[1])) {
                win = true
            }
            if ((row1[2] == row3[0]) && (row1[2] == row2[1])) {
                win = true
            }
            break
        }
        return win
    }

    // public methods (incl. getters and board actions)
    return { 
        displayState: function() {
            console.table(board)
            console.log("Turn:", turncount)
            console.log("Win:", win)
        },
        
        playMove: function(row, col) {
            let marker = getCurrentMarker()
            board[row][col] = marker
            turncount++
            win = checkWin()
        },

        reset: function() {
            board = [
                [".", ",", "."],
                [",", "+", ","],
                [".", ",", "."]]
            turncount = 0
            win = false
        }
    }
})();

// testing game flow
TicTacToe.displayState()
TicTacToe.playMove(1,1)
TicTacToe.displayState()
TicTacToe.playMove(0,2)
TicTacToe.displayState()
TicTacToe.playMove(2,2)
TicTacToe.displayState()
TicTacToe.playMove(0,1)
TicTacToe.displayState()
TicTacToe.playMove(0,0)
TicTacToe.displayState()
TicTacToe.reset()
TicTacToe.displayState()

// DOM display
const TicTacToeDisplay = (function() {
    // assign interactity to each box
    const boxElements = document.querySelectorAll(".box")
    boxElements.forEach(box => {
        box.addEventListener("click", function(){
            this.textContent = "E"
            this.disabled = true
        })
    })
})();