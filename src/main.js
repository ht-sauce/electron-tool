const { app, BrowserWindow, Menu } = require('electron')
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
    minHeight: 1000,
    minWidth: 1400,
    webPreferences: {
      preload: getBulidFile('preload.js'),
      nodeIntegration: true, // 启用Node.js集成
      contextIsolation: false, // 禁用上下文隔离
      webSecurity: true, // 禁用web安全策略
    },
  })
  Menu.setApplicationMenu(null)

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
  } else {
    mainWindow.loadFile(getBulidFile(`../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`))
  }

  // 默认打开开发工具
  mainWindow.webContents.openDevTools()
  // 监听键盘事件
  mainWindow.webContents.on('before-input-event', (event, input) => {
    console.log(input.key)
    if (input.key.toLowerCase() === 'f12') {
      event.preventDefault()
      mainWindow.webContents.openDevTools()
    }
    if (input.key.toLowerCase() === 'f5') {
      event.preventDefault()
      mainWindow.webContents.reload()
    }
  })
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
