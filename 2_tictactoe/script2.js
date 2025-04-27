// BACKEND

const tttGame = (function() {
    let row1 = [".", ",", "."]
    let row2 = [",", "~", ","]
    let row3 = [".", ",", "."]
    let board = [row1, row2, row3]
    let turn_counter = 0
    let win_state = false
    const markers = ["x", "o"]
    
    function playMove (box_id) {
        let row = box_id[0]
        let col = box_id[1]
        if (tttGame.turn_counter%2 == 0) {
            board[row][col] = markers[0]
        } else {
            board[row][col] = markers[1]
        }
        tttGame.turn_counter++
    }

    function checkWin () {
        let win = false
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
        tttGame.win_state = win
        return win
    }


    function reset() {
        board[0] = [".", ",", "."]
        board[1] = [",", "+", ","]
        board[2] = [".", ",", "."]
        turn_counter = 0
    }

    function info() {
        console.table(board) 
        console.log(checkWin())
        console.log("turn:", turn_counter)
    }

    return {board, turn_counter, win_state, markers, 
            playMove, checkWin, reset, info}
})();


// FRONT END
const boxElements = document.querySelectorAll(".box")
boxElements.forEach(box => {
    box.addEventListener("click", function(){
        tttGame.playMove(this.id)
        if (tttGame.turn_counter%2 != 0) {
            this.textContent = tttGame.markers[0]
        } else {
            this.textContent = tttGame.markers[1]
        }
        console.log("turn", tttGame.turn_counter)
        console.log("win:", tttGame.checkWin())
        // maybe when assigning the EventListener it assign a constant?
        // it has to be something with different instances being created in the EventListener
        this.disabled = true
    })
})

const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", restart)

function restart() {
    console.log("RESET")
    tttGame.reset()
    tttGame.info()
    boxElements.forEach(box => {
        box.disabled = false
        box.textContent = ""
    })
}

