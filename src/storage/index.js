/**
 * 封装Storage
 */

const STORAGE_KEY = 'mall'
export default {
  // 存储指定值
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, value)
    } else {
      let val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }

  },
  // 获取某一个模块下面的指定值
  getItem(key, module_name) {
    //获取某个模块
    if (module_name) {
      let val = this.getItem(module_name)
      if (val) return val[key]
    }
    //获取某个值
    return this.getStorage()[key]
  },
  // 获取所有值
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 清空所有值
  clear(key, module_name) {
    let val = this.getStorage()
    if (module_name) {
      if (!val[module_name]) return
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    this.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
