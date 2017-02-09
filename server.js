var http = require('http'),
  express = require('express'),
  app = express(),
  server = http.createServer(app);

app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'\\views\\index.html');
});

server.listen(9000);
