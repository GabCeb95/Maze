
class Matrix extends Array {
    constructor(rows, cols) {
        super();
        this.rows = rows;
        this.cols = cols;
        this.init();
    }

    range(a, b) {
        return Array.from({
            length: b - a
        });
    }

    createCells(cols, i) {
        return Array.from({
            length: cols - 0
        }, (_, j) => new Cell(i, j));
    }

    init() {
        this.range(0, this.rows).forEach((_, i) => this[i] = this.createCells(this.cols, i));
    }
}
