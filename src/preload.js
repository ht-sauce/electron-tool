// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
window.addEventListener('DOMContentLoaded', () => {
  // const replaceText = (selector, text) => {
  //   const element = document.getElementById(selector)
  //   if (element) element.innerText = text
  // }

  for (const dependency of ['chrome', 'node', 'electron']) {
    console.log('开发环境', `${dependency}-version`, process.versions[dependency])
  }
})
