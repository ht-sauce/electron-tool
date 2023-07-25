// https://juejin.cn/post/7255224807322239034?searchId=20230724164808C25AE5747CE072C9E7E8#heading-5

import { app, BrowserWindow } from 'electron'
import path from 'path'

const createWindow = () => {
  // 创建浏览窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // 根据命令行参数加载URL或本地文件
  if (process.argv[2]) {
    mainWindow.loadURL(process.argv[2])
  } else {
    mainWindow.loadFile('index.html')
  }

  // 打开开发工具
  // mainWindow.webContents.openDevTools()
}
// 等待Electron应用就绪后创建BrowserWindow窗口
app.whenReady().then(async () => {
  createWindow()
})

// macOS(darwin)
// 当所有窗口关闭时退出应用
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
// 如果没有窗口打开则打开一个窗口 (macOS)
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
