var express = require('express'),
    router = express.Router(),
    home = require('../controllers/home');
    userDB= require('../controllers/userDB');
module.exports = (app) => {
    router.get('/index.html',home.index);
    router.get('/laberinto/rows/:rows/cols/:cols',home.laberinto);
	router.get('/usuario/name/:name/pass/:pass',userDB.saveUser);
	router.get('/saveGame/name/:name/game/:game',userDB.saveGame);
	router.get('/loadGame/name/:name',userDB.loadGame);
	router.get('/findUsuario/name/:name/pass/:pass',userDB.findUser);
	
  /*router.post('/images',image.create);*/
    app.use(router);
};
