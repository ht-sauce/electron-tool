import type { MenuItem } from './types'
// 为菜单添加id
export const recursionId = (menuList: MenuItem[], indexs?: string) => {
  for (let i = 0; i < menuList.length; i++) {
    const itemMenu = menuList[i]
    const id = i.toString()
    itemMenu.id = (indexs ? indexs + '-' : '') + id
    if (itemMenu.children) {
      recursionId(itemMenu.children, itemMenu.id)
    }
  }
}

// 查找菜单id
export const findMenuId = (menuList: MenuItem[], id: string) => {
  for (let i = 0; i < menuList.length; i++) {
    const itemMenu = menuList[i]
    if (itemMenu.id === id) {
      return itemMenu
    }
    if (itemMenu.children) {
      const menu = findMenuId(itemMenu.children, id)
      if (menu) {
        return menu
      }
    }
  }
}
