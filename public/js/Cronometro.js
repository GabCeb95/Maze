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
