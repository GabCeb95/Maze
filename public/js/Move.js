
class Move {
    constructor(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }

    equals(move) {
        return this.dx == move.dx && this.dy == move.dy;
    }
}

try {
    module.exports = Move;
} catch (e) {}
