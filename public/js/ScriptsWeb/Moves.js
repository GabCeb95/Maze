
let right = new Move(1,0);
let left = new Move(-1,0);
let down = new Move(0,1);
let up = new Move(0,-1);

class Moves {
    constructor(){
        this.moves = [right,left,down,up];
    }

    getMove(){
        let index = random(0,this.moves.length-1);
        let move = this.moves[index];
        this.moves = this.moves.filter( (elem) => (elem == move)?false:true );
        return move;
    }

    forEach(f){
        let r = () => {
            let move = this.getMove();
            f(move);
            return (!this.isEmpty())? r() : null;
        };
        r();
    }

    isEmpty(){
        return this.moves.length == 0;
    }
}

