import { dbTableName } from './config'
import localforage from 'localforage'

export function insert(data: any) {
  return localforage.setItem(dbTableName.knowledgeBase, data)
}
export function get() {
  return localforage.getItem(dbTableName.knowledgeBase)
}
