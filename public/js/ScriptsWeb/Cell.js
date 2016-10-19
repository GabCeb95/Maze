/*
Gabriel Vargas
*/
class Cell {

    constructor(row, column, up, down, left, right) {
        this.row = row;
        this.column = column;
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
    }

    neighborsToBool() {
        this.up = this.up != undefined;
        this.down = this.down != undefined;
        this.left = this.left != undefined;
        this.right = this.right != undefined;
    }
}
