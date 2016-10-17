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
