const {app} = require('electron')
const {BrowserWindow} = require('electron')
const path = require('path')
const fs = require('fs')

let mainWindow

(async () => {
  await app.whenReady();
  mainWindow = new BrowserWindow({
    width: 840,
    height: 420,
    frame: false,
    show: false,
    resizable: false,
    webPreferences: {
        nodeIntegration: true
    }
  })
  mainWindow.loadFile('index.html')
  //mainWindow.toggleDevTools();
  mainWindow.setMenu(null)
  mainWindow.once('ready-to-show', async() => { mainWindow.show(); })
  mainWindow.on('closed', async () => {
    mainWindow = null
  })
})();


app.on('window-all-closed', async () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', async () => {
  if (mainWindow === null) createWindow()
})
