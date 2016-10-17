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
class CronoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.control = null;
        this.init();
    }

    init() {
        this.view.get("inicio").onclick = _ => this.startCrono();
        this.view.get("parar").onclick = _ => this.pauseCrono();
    }

    startCrono() {
        this.control = window.setInterval(_ => this.cronometro(this), 10);
        this.view.buttons(true);
    }

    pauseCrono() {
        window.clearInterval(this.control);
        this.view.buttons(false);
    }

    resetCrono() {
        window.clearInterval(this.control);
        this.model.setValues();
        this.view.buttons(false);
    }

    endCrono() {
        window.clearInterval(this.control);
        this.view.turnOffButtons();
    }

    cronometro(t) {
        let centesimas = t.model.getCentesimas();
        let segundos = t.model.getSegundos();
        let minutos = t.model.getMinutos();
        let horas = t.model.getHoras();

        if (centesimas < 100)
            centesimas = ((centesimas + 1) > 99) ? 0 : (centesimas + 1);
        if (centesimas == 0)
            segundos = ((segundos + 1) > 59) ? 0 : (segundos + 1);
        if (centesimas == 0 && segundos == 0)
            minutos = ((minutos + 1) > 59) ? 0 : (minutos + 1);
        horas = (centesimas == 0 && segundos == 0 && minutos == 0) ? horas + 1 : horas;

        t.model.setValues(centesimas, segundos, minutos, horas);
    }

    saveValues() {
        return [this.model.getCentesimas(), this.model.getSegundos(),
                    this.model.getMinutos(), this.model.getHoras()];
    }

    loadValues(values) {
        this.model.setValues(values[0], values[1], values[2], values[3]);
    }
}
