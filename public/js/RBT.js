
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
