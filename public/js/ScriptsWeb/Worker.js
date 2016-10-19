
onmessage = function(event) {
    importScripts('/scripts/Random.js', '/scripts/Cell.js', '/scripts/Matrix.js',
        '/scripts/Maze.js', '/scripts/RBT.js','/scripts/Move.js',
        '/scripts/Moves.js','/scripts/Solution.js');
    let rbt = new RBT();
    let _maze = rbt.makeMaze(event.data.r, event.data.c);
    let _solution = new Solution().findLongestPath(_maze);
    _maze.cells.forEach((v) =>
        v.forEach(cell => cell.neighborsToBool())
    );

    let response = {
        maze: _maze,
        solution: _solution._longestPath
    };

    postMessage({
        messageType: "Answer",
        data: response
    });
};
