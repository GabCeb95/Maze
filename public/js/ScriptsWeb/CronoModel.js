/*
Gabriel Vargas
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
