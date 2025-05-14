const TicTacToe = (function() {
    // private state
    let board = [
        [".", ",", "."],
        [",", "+", ","],
        [".", ",", "."]]
    let turncount = 0
    let markers = ["X", "O"]
    let win = false
    
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

        getCurrentMarker: function() {
            return markers[turncount%2]
        },
        
        getWin: function() {
            return win
        },

        getTurncount: function() {
            return turncount
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

// DOM display
const TicTacToeDisplay = (function() {
    // assign reference to status message
    const statusMessage = document.querySelector(".status")
    let currentPlayer = 0
    function displayMessage() {
        if (TicTacToe.getWin()) {
            statusMessage.textContent = 
                `Player ${currentPlayer} wins!`
        } else if (TicTacToe.getTurncount() == 9){
            statusMessage.textContent =
                "Game over. It's a draw!" 
        } else {
            currentPlayer = TicTacToe.getTurncount()%2+1
            statusMessage.textContent = 
                `Player ${currentPlayer}'s turn`
        }
    }

    // assign interactity to each box
    const boxElements = document.querySelectorAll(".box")
    boxElements.forEach(box => {
        box.addEventListener("click", function(){
            this.textContent = TicTacToe.getCurrentMarker()
            this.disabled = true
            TicTacToe.playMove(this.id[0], this.id[1])
            TicTacToe.displayState()
            displayMessage()
        })
    })

    // reset functionality
    const resetBtn = document.querySelector(".reset")
    resetBtn.addEventListener("click", reset)
    function reset() {
        boxElements.forEach(box => {
            box.disabled = false
            box.textContent = ""
        })
        statusMessage.textContent = "Game start!"
        console.log("RESET")
        TicTacToe.reset()
        TicTacToe.displayState()
    }
})();