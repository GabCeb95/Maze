
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
