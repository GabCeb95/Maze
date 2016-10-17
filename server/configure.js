var path = require('path'),
    routes = require('./routes'),
    express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

module.exports = (app) => {
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({'extended':true}));
	app.use(bodyParser.json());
	routes(app);

	app.use('/scripts/',express.static(path.join(__dirname,'..','public','js','ScriptsWeb')));
	app.use('/css/',express.static(path.join(__dirname,'..','public','css')));
    app.use('/images/',express.static(path.join(__dirname,'..','public','img')));
    app.use('/sounds/',express.static(path.join(__dirname,'..','public','sounds')));

	//app.use(express.static(path.join(__dirname+'/../public')));
	//app.use(express.static(__dirname + '/../public'));

	return app;
};

//morgan is responsible for logging
    //bodyParser facilitate the packing of any form fields that are submitted via HTML form submission
    //routes(app) -> you can respond to requests such as GET,POST,PUT,UPDATE
    //express.static() is use to render static content files to the browser from a resource directory (.js,.css,images,.html)
