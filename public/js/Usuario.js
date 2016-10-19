
class Usuario {
    constructor(name, pass) {
        this.name = name;
        this.pass = pass;
    }
}

try {
    module.exports = Usuario;
} catch (e) {}
