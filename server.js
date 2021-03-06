/*
Maze
*/
var express = require('Express');
var path = require('path');
config = require('./server/configure');
app = express();

app.set('port',process.env.PORT || 3300);
//app.set('views',__dirname + '/views');
app = config(app);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));});

app.listen(app.get('port'),function(){
    console.log('Server up: http://localhost:' + app.get('port'));
});
