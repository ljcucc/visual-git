const { app, BrowserWindow, nativeTheme } = require('electron');
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 900,
    minHeight: 750,
    width: 1000,
    height: 800,
    // frame: false,
    // titleBarStyle: 'hidden',
    // titleBarStyle: 'customButtonsOnHover',
    // titleBarOverlay: {
    //   color: "#2E2E2E",
    //   symbolColor: "#FFFFFF",
    //   height: 30
    // },
    // autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs')
    }
    // icon: __dirname+'/assets/icon_5x.png'
  });

  nativeTheme.themeSource = 'dark'

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