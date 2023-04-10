const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    width: 1000,
    height: 800,
    // icon: __dirname+'/assets/icon_5x.png'
  });

  console.log(__dirname+'/assets/icon_5x.png')

  if (app.isPackaged) {
    win.loadFile(join(__dirname, './dist/index.html'))
  } else {
    win.loadURL('http://localhost:3001')
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});