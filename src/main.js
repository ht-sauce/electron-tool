const { app, BrowserWindow } = require('electron')
const path = require('path')

if (require('electron-squirrel-startup')) {
  app.quit()
}
// 获取构建后的文件
const getBulidFile = (filePath = '') => {
  return path.join(__dirname, filePath)
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    icon: getBulidFile('logo.png'),
    width: 1400,
    height: 1000,
    webPreferences: {
      preload: getBulidFile('preload.js'),
      nodeIntegration: true, // 启用Node.js集成
      contextIsolation: false, // 禁用上下文隔离
      webSecurity: true, // 禁用web安全策略
    },
  })

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
  } else {
    mainWindow.loadFile(getBulidFile(`../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`))
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
