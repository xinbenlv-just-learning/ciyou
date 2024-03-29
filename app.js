/*global require:false, process:false, __dirname:false console:false */

(function () {

    "use strict";
    /**
     * Module dependencies.
     */

    var express = require('express'),
        routes = require('./routes'),
        api = require('./api'),


        user = require('./routes/user'),
        http = require('http'),
        path = require('path');

    var app = express();

    app.configure(function () {
        app.set('port', process.env.PORT || 3000);
        app.set('views', __dirname + '/views');
        app.set('view engine', 'ejs');
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser('your secret here'));
        app.use(express.session());
        app.use(app.router);
        app.use(require('stylus').middleware(__dirname + '/public'));
        app.use(express['static'](path.join(__dirname, 'public')));
    });

    app.configure('development', function () {
        app.use(express.errorHandler());
    });

    app.get('/', routes.index);
    app.get('/users', user.list);
    app.get('/api', api.index);
    app.get('/api/user/:uid', api.user);
    app.get('/api/word/:id', api.word);
    app.get('/api/wordlist/:id', api.wordlist);

    http.createServer(app).listen(app.get('port'), function () {
        console.log("Express server listening on port " + app.get('port'));
    });

}());
