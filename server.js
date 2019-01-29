var koa = require('koa');
var serve = require('koa-static');

var app = koa();

app.use(serve(__dirname + '/public'));
app.listen(process.env.PORT || 5000);
