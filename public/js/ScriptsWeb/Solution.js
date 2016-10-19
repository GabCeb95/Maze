
class Solution {
    constructor() {
        this.longestPath = new Array();
        this.visited = new Array();
    }

    isVisited(row, col) {
        return this.visited["" + row + "-" + col];
    }

    setVisited(row, col, value) {
        this.visited["" + row + "-" + col] = value;
    }

    findLP(cell, path) {
        const row = cell.row;
        const col = cell.column;
        if (!this.isVisited(row, col)) {
            path = path.concat(cell);
            if (this.longestPath.length < path.length)
                this.longestPath = path;

            this.setVisited(row, col, true);
            let neighbors = [cell.up, cell.down, cell.left, cell.right];

            neighbors.forEach((neighbor) => {
                if (neighbor && !this.isVisited(neighbor.row, neighbor.column)) {
                    this.findLP(neighbor, path);
                }
            });
        }
    }

    findLongestPath(maze) {
        const col = random(0, maze.columns - 1);

        let begin = maze.cells[0][col];
        this.findLP(begin, new Array());

        this.visited = new Array();
        begin = this.longestPath[this.longestPath.length - 1];
        this.findLP(begin, new Array());

        begin = this.longestPath[0];
        const end = this.longestPath[this.longestPath.length - 1];
        return {
            _longestPath: this.longestPath,
            _begin: begin,
            _end: end
        };
    }
}
