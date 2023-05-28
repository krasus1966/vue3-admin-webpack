/**
 * 是否为外部资源
 * @param path
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 转小写
 */
export function toLine(value) {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}
