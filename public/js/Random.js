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
let random = (min, max) => {
    min = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
}

try {
    module.exports = {
        getRandomInt: (m, M) => random(m, M)
    };
} catch (e) {}