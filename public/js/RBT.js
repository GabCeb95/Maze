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
    var Maze = require(__dirname + '/Maze.js');
    var Rand = require(__dirname + '/Random.js');
    var Moves = require(__dirname + '/Moves.js');
    var Move = require(__dirname + '/Move.js');
} catch (e) {}

let right = new Move(1, 0);
let left = new Move(-1, 0);
let down = new Move(0, 1);
let up = new Move(0, -1);

class RBT {
    constructor() {
        this.maze = null;
    }

    recorrer(visited, cell) {
        const row = cell.row;
        const col = cell.column;

        visited["" + row + "-" + col] = true;
        const moves = new Moves();
        moves.forEach((move) => {
            let neighbor;
            const y = row + move.dy;
            const x = col + move.dx;
            try {
                neighbor = this.maze.cells[y][x];
            } catch (ignore) {}

            if (neighbor && !visited['' + neighbor.row + "-" + neighbor.column]) {
                (move.equals(up)) ? (
                    cell.up = neighbor,
                    neighbor.down = cell
                ) :
                (move.equals(down)) ? (
                    cell.down = neighbor,
                    neighbor.up = cell
                ) :
                (move.equals(right)) ? (
                    cell.right = neighbor,
                    neighbor.left = cell
                ) : (
                    cell.left = neighbor,
                    neighbor.right = cell
                )
                this.recorrer(visited, neighbor);
            }
        });
    }

    makeMaze(rows, cols) {
        this.maze = new Maze(rows, cols);
        let row = Rand.getRandomInt(0, rows - 1);
        let col = Rand.getRandomInt(0, cols - 1);
        this.recorrer(new Array(), this.maze.cells[row][col]);
        return this.maze;
    }
}

try {
    module.exports = RBT;
} catch (e) {}
