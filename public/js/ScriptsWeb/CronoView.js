/*
Gabriel Vargas
*/
class CronoView {
    constructor(model) {
        this.model = model;
        this.model.addObserver(this);
        this.centesimas = this.get("Centesimas");
        this.segundos = this.get("Segundos");
        this.minutos = this.get("Minutos");
        this.horas = this.get("Horas");
    }

    get(id) {
        return document.getElementById(id);
    }

    buttons(active) {
        this.get("inicio").disabled = active;
        this.get("parar").disabled = !active;
    }

    turnOffButtons() {
        this.get("inicio").disabled = true;
        this.get("parar").disabled = true;
    }

    addZero(value) {
        value = value.toString();
        return (value.length < 2) ? "0".concat(value) : value;
    }

    update() {
        if (this.centesimas != undefined && this.segundos != undefined &&
          this.minutos != undefined && this.horas != undefined) {
            this.centesimas.innerHTML = ":".concat(this.addZero(this.model.getCentesimas()));
            this.segundos.innerHTML = ":".concat(this.addZero(this.model.getSegundos()));
            this.minutos.innerHTML = ":".concat(this.addZero(this.model.getMinutos()));
            this.horas.innerHTML = this.addZero(this.model.getHoras());
        }
    }
}
