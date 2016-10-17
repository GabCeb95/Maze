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
class View {
    constructor(model) {
        this.model = model;
        this.model.addObserver(this);
        this.svg = this.get('mazeSVG');
        this.overlay = this.get('overlay');
        this.popup = this.get('popup');
    }

    delElemSVG(elem) {
        this.svg.removeChild(elem);
    }

    delLastElemSVG() {
        this.delElemSVG(this.svg.lastChild);
    }

    clearSVG() {
        while (this.svg.firstChild)
            this.delElemSVG(this.svg.firstChild);
    }

    showLines(lines) {
        this.clearSVG();
        lines.forEach((line) => {
            this.svg.appendChild(Dibujo.createLine(line.x1, line.x2, line.y1, line.y2));
        });
    }

    showPosition(x, y, w, h, color) {
        this.svg.appendChild(Dibujo.createRect(x, y, w, h, color));
    }

    update() {
        if (this.model.getMaze()) {
            let lines = Line.mazeToLines(this.model.getMaze());
            this.showLines(lines);
        }

        let sol = this.model.getSolution();
        if (sol) {
            let rect = Rect.cellToRect(sol[0]);
            this.showPosition(rect.x, rect.y, 21, 21, "blue");
            rect = Rect.cellToRect(sol[sol.length - 1]);
            this.showPosition(rect.x, rect.y, 21, 21, "red");
        }

        let actual = this.model.getActual();
        if (actual) {
            let rect = Rect.cellToRect(this.model.getActual());
            this.showPosition(rect.x, rect.y, 21, 21, "green");
        }

    }

    iniciar() {
        overlay.style.display = "block";
        popup.style.display = "block";
    }

    salir() {
        overlay.style.display = "none";
        popup.style.display = "none";
    }

    loginError() {
        this.clearInput();
        this.get("registerOk").style.display = "none";
        this.get("registerError").style.display = "none";
        this.get("loginError").style.display = "block";
    }

    clearInput() {
        this.get("userid").value = "";
        this.get("pwd").value = "";
    }

    registerOkView() {
        this.clearInput();
        this.get("loginError").style.display = "none";
        this.get("registerOk").style.display = "block";
        this.get("registerError").style.display = "none";
    }

    registerErrorView() {
        this.clearInput();
        this.get("loginError").style.display = "none";
        this.get("registerOk").style.display = "none";
        this.get("registerError").style.display = "block";
    }

    get(id) {
        return document.getElementById(id);
    }
}
