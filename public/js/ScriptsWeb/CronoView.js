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
