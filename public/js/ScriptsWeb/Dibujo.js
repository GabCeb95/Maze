/*
Gabriel Vargas
*/
class Dibujo {
    constructor() {

    }

    static createRect(x, y, width, height, color) {
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        rect.setAttribute("style", "fill:" + color);
        return rect;
    }

    static createLine(x1, x2, y1, y2) {
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:2");
        return line;
    }
}
