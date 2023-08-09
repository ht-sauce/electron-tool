export enum MenuItemType {
  route = 'route',
  fun = 'fun',
}
export type MenuItem = {
  name: string
  id?: string
  path?: string
  children?: MenuItem[]
  type?: string | MenuItemType
}
