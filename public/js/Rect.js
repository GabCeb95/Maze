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
