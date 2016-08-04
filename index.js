var express = require('express');
var app = express();
import {apolloServer} from 'graphql-tools';
import Schema from './data/schema';
import Resolver from './data/resolver';

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolver
}));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
