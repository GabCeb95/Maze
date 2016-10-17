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
class Model extends Observable {
    constructor() {
        super();
        this.maze = null;
        this.solution = null;
        this.actual = null;
        this.usuario = null;
        this.online = true;
    }

    setMaze(maze) {
        this.maze = maze;
    }

    getMaze() {
        return this.maze;
    }

    setSolution(solution) {
        this.solution = solution;
    }

    getSolution() {
        return this.solution;
    }

    setUsuario(usuario) {
        this.usuario = usuario;
    }

    getUsuario() {
        return this.usuario;
    }

    setOnline(online) {
        this.online = online;
    }

    getOnline() {
        return this.online;
    }


    getSolLength() {
        return this.solution.length;
    }

    getSolPos(index) {
        return this.solution[index];
    }

    initActual(actual) {
        this.actual = actual;
    }

    setActual(actual) {
        this.actual = actual;
        this.setChanged();
        this.notifyObservers();
    }

    getActual() {
        return this.actual;
    }
}
