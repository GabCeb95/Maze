
class Rect {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    static cellToRect(cell) {
        let CELL_DISTANCE = 25;
        return new Rect(12 + (CELL_DISTANCE * cell.column), 12 + (CELL_DISTANCE * cell.row), 21, 21);
    }

    static cellArrayToRect(cells) {
        let CELL_DISTANCE = 25;
        return cells.reduce((r, elem) => r.concat(Rect.cellToRect(elem)), new Array());
    }
}
