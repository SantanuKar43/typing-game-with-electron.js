const {app,BrowserWindow} = require('electron');

var mainWindow;
app.on('ready',function(){
  mainWindow = new BrowserWindow({
    height:540,
    width:960
  });

  //mainWindow.setMenu(null);
  mainWindow.loadURL('http://localhost:9000');

});
