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
var path = require('path');
var RBT = require(path.join(__dirname,'..','public','js','RBT.js'));
var Line = require(path.join(__dirname,'..','public','js','Line.js'));
var Rect = require(path.join(__dirname,'..','public','js','Rect.js'));
var Solution = require(path.join(__dirname,'..','public','js','Solution.js'));
module.exports = {
        index: (req,res) => {
            res.sendFile(path.join(__dirname,'..','public','index.html'));
        },

        laberinto: (req,res)=>{
            let rbt = new RBT();
            let _maze = rbt.makeMaze(req.params.rows,req.params.cols);
            let _solution = Solution.findLongestPath(_maze);

			_maze.cells.forEach( (v) => 
				v.forEach( cell => cell.neighborsToBool() )
			);
			
			let response = { maze:_maze, solution:_solution._longestPath};
			res.send(JSON.stringify(response));
        }
		
};
