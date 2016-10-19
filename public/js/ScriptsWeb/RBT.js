
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
        let row = random(0, rows - 1);
        let col = random(0, cols - 1);
        this.recorrer(new Array(), this.maze.cells[row][col]);
        return this.maze;
    }
}
