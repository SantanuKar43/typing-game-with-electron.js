const {app,BrowserWindow} = require('electron');

var mainWindow;
app.on('ready',function(){
  mainWindow = new BrowserWindow({
    height:480,
    width:640
  });

  mainWindow.loadURL('http://localhost:9000');

});
