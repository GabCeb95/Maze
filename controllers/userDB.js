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
var db = require('./db.js');
//var Usuario = require('../public/js/Usuario.js');
var path = require('path');
var Usuario = require(path.join(__dirname,'..','public','js','Usuario.js'));
db.conectarDB();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var userSchema = mongoose.Schema({
    name: String,
	pass: String,
	game: String
});
var User = mongoose.model('user', userSchema);

class userDB{

	//Busca el nombre del usuario si no esta lo guarda
	static saveUser(req,res){
		let user= new Usuario(req.params.name,req.params.pass,"");
		console.log("Usuario",user)
		let user1 = new User(user);
		console.log("ESTOY AQUI");
		let name= '{ "name":"'+req.params.name+'"}';
		console.log("NAME:",name)
		let query=User.find(JSON.parse(name));
		let p = query.exec();
		p.then(users => (users.length == 0) ? (user1.save()) : res.send('-1'))
		 .then(response => res.send(JSON.stringify(response)))
		.catch(error =>console.log("estoy en error:",error));
	}

	static saveGame(req,res){
		let p = User.update({name:req.params.name},{game:req.params.game});
		p.then(response => res.send("1"))
		.catch(err => console.log(err));
	}
	//Encuentra el usuario con un nombre y contraseña específica
	static findUser(req,res){
    let user = {name:req.params.name, pass:req.params.pass};
		let query = User.find(user);
		let p= query.exec();
		p.then(users => (users.length == 0) ? (res.send('-1')) : (res.send(user)))
		.catch(error => console.log("estoy en error",error));
	}

	static loadGame(req,res){
		//let name= '{ "name":"'+req.params.name+'"}';

		let query=User.find({name:req.params.name});
		let p = query.exec();
		p.then(users => (users.length == 0) ? res.send('-1') : res.send(users[0].game))
		.catch(error =>console.log("estoy en error:",error));
	}
}

module.exports = userDB;
