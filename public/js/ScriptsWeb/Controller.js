/*
Gabriel Vargas
*/
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.end = false;
        this.solving = false;
        this.cronometro = null;
        this.init();
    }

    status(response) {
        return (response.status >= 200 && response.status < 300) ? Promise.resolve(response) : Promise.reject(new Error(response.statusText));
    }

    json(response) {
        return response.json();
    }

    updateModel(res, t) {
        t.model.setMaze(res.maze);
        t.model.setSolution(res.solution);
    }

    createMaze(t) {
        t.view.clearSVG();

        let lines = Line.mazeToLines(t.model.getMaze());
        t.view.showLines(lines);

        let begin = Rect.cellToRect(t.model.getSolPos(0));
        let end = Rect.cellToRect(t.model.getSolPos(t.model.getSolLength() - 1));

        t.model.initActual(t.model.getSolPos(0));
        t.view.showPosition(begin.x, begin.y, begin.width, begin.height, "blue");
        t.view.showPosition(end.x, end.y, end.width, end.height, "red");
    }

    move(t) {
        let dx = {
            'ArrowUp': 0,
            'ArrowRight': 1,
            'ArrowDown': 0,
            'ArrowLeft': -1
        };
        let dy = {
            'ArrowUp': -1,
            'ArrowRight': 0,
            'ArrowDown': 1,
            'ArrowLeft': 0
        };

        let runEvent = event => {
            const keyName = event.key;
            let currX = dx[keyName];
            let currY = dy[keyName];
            let actual = t.model.getActual();

            if (actual != null) {
                let actualMoves = {
                    'ArrowUp': actual.up,
                    'ArrowRight': actual.right,
                    'ArrowDown': actual.down,
                    'ArrowLeft': actual.left
                };

                if (!t.end && ((keyName == 'ArrowUp') || (keyName == 'ArrowDown') || (keyName == 'ArrowRight') ||
                        (keyName == 'ArrowLeft'))) {
                    event.preventDefault();
                    if (actualMoves[keyName]) {
                        actual = t.model.getMaze().cells[actual.row + currY][actual.column + currX];
                        t.view.delLastElemSVG();
                        t.model.setActual(actual);

                        let lastCelda = t.model.getSolPos(t.model.getSolLength() - 1);
                        if (actual.row == lastCelda.row && actual.column == lastCelda.column) {
                            t.view.delLastElemSVG();
                            t.model.initActual(actual);
                            let last = Rect.cellToRect(actual);
                            t.view.showPosition(last.x, last.y, last.width, last.height, "yellow");
                            this.cronometro.endCrono();
                            t.view.get("winningSound").play();
                            t.end = true;
                        }
                    } else {
                        t.view.get("errorSound").play();
                    }

                }
            }
        }

        window.addEventListener('keydown', event => runEvent(event));
    }

    jugar(t) {
        let inicio = Rect.cellToRect(t.model.getSolPos(0));
        t.view.showPosition(inicio.x, inicio.y, inicio.width, inicio.height, "blue");
        this.view.get("save").disabled = false;
        this.view.get("load").disabled = false;
    }

    getMazeOnline(rows, cols) {
        fetch('laberinto/rows/' + rows + '/cols/' + cols)
            .then(this.status)
            .then(this.json)
            .then(e => this.updateModel(e, this))
            .then(_ => this.createMaze(this))
            .then(_ => this.jugar(this))
            .catch(error => console.log('Request failed: ', error));
    }

    getMazeOffline(rows, cols) {
        let worker = new Worker("/scripts/Worker.js");
        let start = (event) => {
            this.updateModel(event.data.data, this);
            this.createMaze(this);
            this.jugar(this);
        }

        worker.onmessage = start;
        worker.onerror = error => console.log("Error");

        worker.postMessage({
            r: rows,
            c: cols
        });
    }

    getMaze(rows = this.view.get("rows").value, cols = this.view.get("columns").value) {
        if (!this.solving) {
            rows = (rows > 15) ? 15 : (rows <= 0) ? 5 : rows;
            cols = (cols > 29) ? 29 : (cols <= 0) ? 5 : cols;
            this.cronometro.resetCrono();
            this.cronometro.startCrono();
            this.end = false;

            (this.model.getOnline()) ? this.getMazeOnline(rows, cols): this.getMazeOffline(rows, cols);
        }
    }

    runSolution() {
        if (!this.solving && this.model.getMaze() != null) {
            this.solving = true;
            this.end = true;
            this.cronometro.resetCrono();
            this.cronometro.endCrono();
            this.view.get("save").disabled = true;
            this.view.get("load").disabled = true;
            this.model.setActual(null);
            const solLength = this.model.getSolLength();
            this.model.getSolution().forEach((elem, index) =>
                setTimeout(() => this.paintSolution(this.view, index, Rect.cellToRect(elem), solLength),
                    index * 70));
            setTimeout(() => {
              this.solving = false;
            }, this.model.getSolLength() * 70);
        }
    }

    paintSolution(view, index, elem, size) {
        if (index != 0 && index != size - 1)
            view.showPosition(elem.x, elem.y, elem.width, elem.height, "green");
    }

    saveUser(name, pass) {
        fetch('usuario/name/' + name + '/pass/' + pass)
            .then(this.status)
            .then(this.json)
            .then(response => this.register(response, this))
            .catch(error => console.log('Request failed: ', error));
    }

    login(name, pass) {
        fetch('findUsuario/name/' + name + '/pass/' + pass)
            .then(this.status)
            .then(this.json)
            .then(usuario => this.entrar(usuario, this))
            .catch(error => console.log('Request failed: ', error));
    }

    sinConexion() {
        this.model.setOnline(false);
        this.view.salir();
        this.view.clearInput();
    }
    entrar(usuario, t) {
        if (usuario != -1) {
            t.model.setUsuario(usuario);
            t.model.setOnline(true);
            t.view.salir();
            t.view.clearInput();
        } else {
            t.view.loginError();
        }
    }

    register(response, t) {
        if (response != -1) {
            t.model.setUsuario(response);
            t.view.clearInput();
            t.view.registerOkView();
        } else {
            t.view.registerErrorView();
        }
    }

    isValid() {
        this.view.loginError();
    }


    guardarOnline() {
        let game = {
            maze: this.model.getMaze(),
            actual: this.model.getActual(),
            solution: this.model.getSolution(),
            cronometro: this.cronometro.saveValues()
        };
        let game1 = JSON.stringify(game);
        fetch('saveGame/name/' + this.model.getUsuario().name + '/game/' + game1)
            .then(this.status)
            .then(this.json)
            .catch(error => console.log('Request failed: ', error));
    }

    guardarLocal() {
        let objetoP = {
            maze: this.model.getMaze(),
            actual: this.model.getActual(),
            solution: this.model.getSolution(),
            cronometro: this.cronometro.saveValues()
        };
        return localStorage.setItem("Partida", JSON.stringify(objetoP));
    }

    guardar() {
        if (!this.solving)
            (this.model.getOnline()) ? this.guardarOnline() : this.guardarLocal();
    }


    recuperarLocal() {
        let objetoP = JSON.parse(localStorage.getItem("Partida"));
        this.model.setMaze(objetoP.maze);
        this.model.setSolution(objetoP.solution);
        this.model.setActual(objetoP.actual);
        this.cronometro.loadValues(objetoP.cronometro);
		this.cronometro.startCrono();
        this.end = this.isEnded(objetoP.actual, objetoP.solution[objetoP.solution.length - 1]);
        this.jugar(this);
    }

    recuperarOnline() {
        fetch('loadGame/name/' + this.model.getUsuario().name)
            .then(this.status)
            .then(this.json)
            .then(game => {
                this.model.setMaze(game.maze);
                this.model.setSolution(game.solution);
                this.model.setActual(game.actual);
                this.cronometro.loadValues(game.cronometro);
                this.end = this.isEnded(game.actual, game.solution[game.solution.length - 1]);
            })
            .then(_ => this.jugar(this));
    }


    recuperar() {
        if (!this.solving)
            (this.model.getOnline()) ? this.recuperarOnline() : this.recuperarLocal();
    }

    isEnded(actual, lastOne) {
        if (actual.row == lastOne.row && actual.column == lastOne.column) {
            actual = Rect.cellToRect(actual);
            this.view.showPosition(actual.x, actual.y, actual.width, actual.height, "yellow");
            return true;
        }
        return false;
    }

    initCrono() {
        let cmodel = new CronoModel();
        let cview = new CronoView(cmodel);
        this.cronometro = new CronoController(cmodel, cview);
    }

    initBtns() {
        this.view.get("facil").onclick = () => controller.getMaze(5, 5);
        this.view.get("medio").onclick = () => controller.getMaze(15, 20);
        this.view.get("alto").onclick = () => controller.getMaze(15, 29);
        this.view.get("btnSolution").onclick = () => controller.runSolution();
        this.view.get("genMaze").onclick = () => controller.getMaze();
        this.view.get("save").onclick = _ => {
            this.guardar();
        }
        this.view.get("local").onclick = _ => {
            this.sinConexion();
        }
        this.view.get("load").onclick = _ => {
            this.recuperar();
        }
        this.view.get("save").disabled = true;
        this.view.get("inicio").disabled = true;
    }

    initValidations() {
        this.view.get("signup").onclick = _ => {
            let name = this.view.get('userid').value;
            let pass = this.view.get('pwd').value;
            (name == "" || pass == "") ? this.isValid(): this.saveUser(name, pass);
        };

        this.view.get("login").onclick = _ => {
            let name = this.view.get('userid').value;
            let pass = this.view.get('pwd').value;
            (name == "" || pass == "") ? this.isValid(): this.login(name, pass);
        };
    }

    init() {
        this.move(this);
        this.initCrono();
        this.initBtns();
        window.onload = _ => this.view.iniciar();
        this.initValidations();
    }
}
