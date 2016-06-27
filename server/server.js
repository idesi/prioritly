var express = require('express');
var webpackMiddleware = require('webpack-dev-middleware');
var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : process.env.PORT;
var config = require('../webpack.config');
var webpack = require('webpack');
var path = require('path');
var mongoose = require('mongoose');
var serverConfig = require('./config');
var app = express();
var routes = require('./routes/routes');
var bodyParser = require('body-parser');
mongoose.connect(serverConfig.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: '',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  //app.use(webpackHotMiddleware(compiler));
  // app.get('*', function response(req, res) {
  //   res.write(middleware.fileSystem.readFileSync(path.join('../dist/index.html')));
  //   res.end();
  // });
} else {
  app.use(express.static('../dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join('../dist/index.html'));
  });
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);


app.listen(port, function(){
    console.log('App listening on port ' + port);
});
