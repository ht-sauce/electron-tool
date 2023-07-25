import type { Plugin } from 'vite'
import * as electronBuilder from 'electron-builder'
import path from 'path'
import fs from 'fs'

// 导出Vite插件函数
export const viteElectronBuild = (): Plugin => {
  return {
    name: 'vite-electron-build',

    // closeBundle是Vite的一个插件钩子函数，用于在Vite构建完成后执行一些自定义逻辑。
    closeBundle() {
      // 定义初始化Electron的函数
      const initElectron = () => {
        // 使用esbuild编译TypeScript代码为JavaScript
        require('esbuild').buildSync({
          entryPoints: ['src/main-process.ts'],
          bundle: true,
          outfile: 'dist/main-process.js',
          platform: 'node',
          target: 'esnext',
          external: ['electron']
        })
        require('esbuild').buildSync({
          entryPoints: ['src/preload.ts'],
          bundle: true,
          outfile: 'dist/preload.js',
          platform: 'node',
          target: 'esnext',
          external: ['electron'] // 排除electron库
        })
      }

      // 调用初始化Electron函数
      initElectron()

      // 修改package.json文件的main字段 不然会打包失败
      const json = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
      json.main = 'main-process.js'
      fs.writeSync(fs.openSync('dist/package.json', 'w'), JSON.stringify(json, null, 2))

      // 创建一个空的node_modules目录 不然会打包失败
      fs.mkdirSync(path.join(process.cwd(), 'dist/node_modules'))

      // 使用electron-builder打包Electron应用程序
      electronBuilder.build({
        x64: true,
        config: {
          appId: 'dht.com',
          productName: 'vite-electron',
          directories: {
            output: path.join(process.cwd(), 'release'), //输出目录
            app: path.join(process.cwd(), 'dist') //app目录
          },
          asar: true,
          nsis: {
            oneClick: false //取消一键安装
          },
          win: {
            target: [
              {
                target: 'nsis',
                arch: ['x64']
              }
            ]
          }
        }
      })
    }
  }
}
