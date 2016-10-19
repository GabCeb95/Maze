/*
Gabriel Vargas
*/
class Maze {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.cells = new Matrix(this.rows, this.columns);
    }
}
