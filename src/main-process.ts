// https://juejin.cn/post/7255224807322239034?searchId=20230724164808C25AE5747CE072C9E7E8#heading-5
import { app, BrowserWindow } from 'electron'
import path from 'path'

const reslovePath = (pathStr: string) => {
  return path.join(__dirname, pathStr)
}
const createWindow = () => {
  // 创建浏览窗口
  const mainWindow = new BrowserWindow({
    icon: reslovePath('logo.png'),

    width: 1200,
    height: 800,
    // 配置窗口的WebPreferences选项，用于控制渲染进程的行为
    webPreferences: {
      preload: reslovePath('preload.js'),
      nodeIntegration: true, // 启用Node.js集成
      contextIsolation: false, // 禁用上下文隔离
      webSecurity: true // 禁用web安全策略
    }
  })

  // 根据命令行参数加载URL或本地文件
  if (process.argv[2]) {
    mainWindow.loadURL(process.argv[2])
  } else {
    mainWindow.loadFile('index.html')
  }

  // 打开开发工具
  mainWindow.webContents.openDevTools()
}
// 等待Electron应用就绪后创建BrowserWindow窗口
// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // 在 macOS 系统内, 如果没有已开启的应用窗口
    // 点击托盘图标时通常会重新创建一个新窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
// 对应用程序和它们的菜单栏来说应该时刻保持激活状态,
// 直到用户使用 Cmd + Q 明确退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
