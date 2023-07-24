/**
 * *该文件将由vite自动加载，并在“renderer”上下文中运行。
 * *要详细了解中“main”和“renderer”上下文之间的差异
 * *Electron，访问：
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * *默认情况下，此文件中的Node.js集成处于禁用状态。启用Node.js集成时
 * *在呈现过程中，请注意潜在的安全隐患。你可以阅读
 * *有关安全风险的更多信息，请点击此处：
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * *要在此文件中启用Node.js集成，请打开“main.js”并启用“nodeIntegration”`
 * *标志：
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

// import './index.css'
// import './style/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
// app.use(ElementPlus)

app.mount('#app')
