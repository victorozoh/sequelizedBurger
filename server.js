var express = require('express');
var app = express();
// The line below handles heroku's environment
var PORT = process.env.PORT || 8081;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var models = require('./models');
var exphbs = require('express-handlebars');
//use handlebars engine as template engine, use 'main' as our base file
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// This says that if we do root or /, we mean to look in the public folder.
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));


app.use(methodOverride('_method'));

var routes = require('./controllers/burgers_controller.js')(app);

models.sequelize.sync({}).then(function(){
    //Runing the server here.

    app.listen(PORT, function(){
        console.log("App is listening on PORT: " + PORT)
    });
});
