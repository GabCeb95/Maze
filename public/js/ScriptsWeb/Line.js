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
