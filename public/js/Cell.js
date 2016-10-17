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

try {
    module.exports = Cell;
} catch (e) {}
