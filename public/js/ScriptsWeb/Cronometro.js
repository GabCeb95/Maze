/*
Gabriel Vargas
*/
class Cronometro {

    constructor(centesimas = 0, segundos = 0, minutos = 0, horas = 0) {
        this.centesimas = centesimas;
        this.segundos = segundos;
        this.minutos = minutos;
        this.horas = horas;
    }

    setCentesimas(centesimas) {
        this.centesimas = centesimas;
    }

    getCentesimas() {
        return this.centesimas;
    }

    setSegundos(segundos) {
        this.segundos = segundos;
    }

    getSegundos() {
        return this.segundos;
    }

    setMinutos(minutos) {
        this.minutos = minutos;
    }

    getMinutos() {
        return this.minutos;
    }

    setHoras(horas) {
        this.horas = horas;
    }

    getHoras() {
        return this.horas;
    }
}
