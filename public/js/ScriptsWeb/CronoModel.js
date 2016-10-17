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
class CronoModel extends Observable {
    constructor() {
        super();
        this.cronometro = new Cronometro();
    }

    startCrono() {
        this.cronometro.inicio();
    }

    pauseCrono() {
        this.cronometro.parar();
    }

    resetCrono() {
        this.cronometro.reinicio();
        this.setChanged();
        this.notifyObservers();
    }

    setValues(centesimas = 0, segundos = 0, minutos = 0, horas = 0) {
        this.cronometro.setCentesimas(centesimas);
        this.cronometro.setSegundos(segundos);
        this.cronometro.setMinutos(minutos);
        this.cronometro.setHoras(horas);
        this.setChanged();
        this.notifyObservers();
    }

    getCentesimas() {
        return this.cronometro.getCentesimas();
    }

    getSegundos() {
        return this.cronometro.getSegundos();
    }

    getMinutos() {
        return this.cronometro.getMinutos();
    }

    getHoras() {
        return this.cronometro.getHoras();
    }
}
