
let random = (min, max) => {
    min = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
}

try {
    module.exports = {
        getRandomInt: (m, M) => random(m, M)
    };
} catch (e) {}
