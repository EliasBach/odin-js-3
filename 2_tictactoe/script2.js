const TicTacToe = (function() {
    // private state
    
    let board = [
        [".", ",", "."],
        [",", "+", ","],
        [".", ",", "."]]
    let turnCounter = 0
    let markers = ["X", "O"]
    
    // private methods


    // public methods (incl. getters and board actions)
    return { 
        getBoard: function() {
            return board
        },
        
        playMove: function(row, col) {
            board[row][col] = markers[0]
        }
    }
})();

// testing game flow
console.table(TicTacToe.getBoard())
TicTacToe.playMove(1,2)
console.table(TicTacToe.getBoard())
TicTacToe.playMove(2,2)
console.table(TicTacToe.getBoard())