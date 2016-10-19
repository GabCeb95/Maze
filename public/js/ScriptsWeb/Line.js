
class Line {
    constructor(x1, x2, y1, y2) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }

    static mazeToLines(maze) {
        let CELL_DISTANCE = 25;
        let lines = new Array();

        function cellToLineSVG(cell, x, y) {
            if (!cell.up) lines = lines.concat(new Line(x, x + CELL_DISTANCE, y, y));

            if (!cell.left) lines = lines.concat(new Line(x, x, y, y + CELL_DISTANCE));

            if (!cell.right) lines = lines.concat(new Line(x + CELL_DISTANCE, x + CELL_DISTANCE, y, y + CELL_DISTANCE));

            if (!cell.down) lines = lines.concat(new Line(x, x + CELL_DISTANCE, y + CELL_DISTANCE, y + CELL_DISTANCE));
        }

        let x = 10;
        let y = 10;
        for (let i = 0; i < maze.rows; i++) {
            x = 10;
            for (let j = 0; j < maze.columns; j++) {
                cellToLineSVG(maze.cells[i][j], x, y);
                x += CELL_DISTANCE;
            }
            y += CELL_DISTANCE;
        }
        return lines;
    }
}
