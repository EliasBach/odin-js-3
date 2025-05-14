const TicTacToe = (function() {
    // private state
    
    let board = [
        [".", ",", "."],
        [",", "+", ","],
        [".", ",", "."]]
    let turncount = 0
    let markers = ["X", "O"]
    
    // private methods


    // public methods (incl. getters and board actions)
    return { 
    displayState: function() {
            console.table(board)
            console.log("Turn:", turncount)
        },
        
        playMove: function(row, col) {
            turncount%2 == 0 ? marker = markers[0] : marker = markers[1]
            board[row][col] = marker
            turncount++
        }
    }
})();

// testing game flow
TicTacToe.displayState()
TicTacToe.playMove(1,2)
TicTacToe.displayState()
TicTacToe.playMove(2,2)
TicTacToe.displayState()
TicTacToe.playMove(3,0)
TicTacToe.displayState()