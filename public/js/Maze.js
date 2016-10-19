
try {
    var Matrix = require(__dirname + '/Matrix.js');
} catch (e) {

}
class Maze {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.cells = Matrix.createMatrix(this.rows, this.columns);
    }
}

try {
    module.exports = Maze;
} catch (e) {}
