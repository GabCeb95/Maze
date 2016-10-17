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
    var Rand = require('./Random.js');
} catch (e) {}

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
        const col = Rand.getRandomInt(0, maze.columns - 1);

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

try {
    module.exports = {
        findLongestPath: (maze) => (new Solution()).findLongestPath(maze)
    }
} catch (e) {}
