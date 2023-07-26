export type MenuItem = {
  name: string
  id: string
  path?: string
  children?: MenuItem[]
  type?: MenuItemType.route | MenuItemType.fun
}

export const MenuItemType = {
  route: 'route',
  fun: 'fun',
}
