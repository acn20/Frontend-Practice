class Engine {
    // the constructor expects a parameter of type EngineOptions
    constructor(options) { // the entry point of every object
        this.player1Name = options.player1Name;//this refers to the current created object
        this.player2Name = options.player2Name;
        this.size = options.size;

        this.board = [];//cream proprietatea board
        for(var i = 0; i < this.size; i++) {//cream matricea
            this.board.push(new Array(this.size));//cream matricea
        }
        // [ [undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined] ]
    }

    onWin(callback) { // callback is a function that we will call when we detect a win condition
        this.onWinCallback = callback;
    }

    makeMove(mark) {//we are expecting a parameter of type Mark
        if (mark.i >= this.size || mark.j >= this.size || mark.i < 0 || mark.j < 0) {
            throw new Error("Invalid coordinates");
        }
        if (this.board[mark.i][mark.j]) {
            throw new Error("This position has already been played.");
        }
        if (mark.type == null || mark.type.toUpperCase() != "O" || mark.type.toUpperCase() != "X") {
            throw new Error("Invalid mark");
        }

        this.board[mark.i][mark.j] = mark.type; // stores the type of the move on the board, i.e. X or O

        //verify win condition
        // row win
        for(let i = 0; i < this.size; i++) {// let only exists in the scope they are declared. try to use let as much as possible
            let currentMark = this.board[i][0];//toate elementele le comparam cu primul element de pe acel rand
            let isVictory = true;

            for(let j = 1; j < this.size; j++) {
                if(this.board[i][j] != currentMark) {
                    isVictory = false;
                    break; // jump out of the inner for loop
                }
            }

            if(isVictory) { // game over
                this.onWinCallback(); // TODO we need to pass details, for example which player won etc
            }
        }

        // column win
        for(let j = 0; j < this.size; j++) {
            let currentMark = this.board[0][j];
            let isVictory = true;

            for(let i = 1; i < this.size; i++) {
                if(this.board[i][j] != currentMark) {
                    isVictory = false;
                    break;
                }
            }
            
            if(isVictory) { // game over

            }
        }

        // diagonal win
        let currentMark = this.board[this.size/2][this.size/2];
        var isVictory = true;

        for(let i = 0; i < this.size; i++) {
            if(this.board[i][i] != currentMark) {
                isVictory = false;
                break;
            }
        }
        
        if(isVictory) { // game over
        }

        isVictory = true;

        for(let i = 0; i < this.size; i++) {
            if(this.board[this.size - i - 1][this.size - i - 1] != currentMark) {
                isVictory = false;
                break;
            }
        }

        if(isVictory) { // game over
        }
    }
}
