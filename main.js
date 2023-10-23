const { app, BrowserWindow, Menu} = require('electron');
const path = require('node:path');
const url = require('url')


function createMainWindow (){

    const mainWindow = new BrowserWindow({
        title: "Task Tracker",
        width: 1000,
        height: 1000,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.webContents.openDevTools();

    
    const startUrl  = url.format({
        pathname: path.join(__dirname, './tasktracker/build/index.html'),
        protocol: 'file'
    })

    mainWindow.loadURL(startUrl)
}

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
});