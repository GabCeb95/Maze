/*
EIF400 II-2016 C. Loria-Saenz
Proyecto I - 05/09/2016

        NOMBRE              		ID           		HORARIO
1)Valeria Espinoza Gonzalez		116530404		1 PM	
2)César Guzmán Miranda			116300393		1 PM
3)Fabián Morera Gutiérrez		115950838		1 PM
4)Beatriz Padilla Moreno		402320394		1 PM
5)Jhonny Vargas Arias			116030322		1 PM
*/
try {
    var Move = require(__dirname + '/Move.js');
    var Rand = require(__dirname + '/Random.js');
} catch (e) {}

let right = new Move(1, 0);
let left = new Move(-1, 0);
let down = new Move(0, 1);
let up = new Move(0, -1);

class Moves {
    constructor() {
        this.moves = [right, left, down, up];
    }

    getMove() {
        let index = Rand.getRandomInt(0, this.moves.length - 1);
        let move = this.moves[index];
        this.moves = this.moves.filter((elem) => (elem == move) ? false : true);
        return move;
    }

    forEach(f) {
        let r = () => {
            let move = this.getMove();
            f(move);
            return (!this.isEmpty()) ? r() : null;
        };
        r();
    }

    isEmpty() {
        return this.moves.length == 0;
    }
}

try {
    module.exports = Moves;
} catch (e) {}
