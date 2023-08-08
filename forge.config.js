module.exports = {
  packagerConfig: {
    icon: 'public/icon',
    // asar: true,
    version: '1.0.0', // 应用程序版本号
    // 不需要打包的文件和文件夹的路径列表,true表示忽略,false表示包含
    ignore(path) {
      if (!path) return false
      if (path.includes('/node_modules/electron-squirrel-startup')) return false
      if (path.includes('/.vite')) return false
      if (path.includes('/package.json')) return false

      return true
    },
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: 'public/icon.ico',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: 'public/icon.png',
        },
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-vite',
      config: {
        build: [
          {
            entry: 'src/main.js',
            config: 'vite.main.config.mjs',
          },
          {
            entry: 'src/preload.js',
            config: 'vite.preload.config.mjs',
          },
        ],
        renderer: [
          {
            name: 'main_window',
            config: 'vite.renderer.config.mjs',
          },
        ],
      },
    },
  ],
}
