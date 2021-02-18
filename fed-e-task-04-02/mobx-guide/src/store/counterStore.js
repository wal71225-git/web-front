// 1. 创建store对象
// 2. 将store对象放到全局可以访问到的地方(使用mobx-react provider)

import { makeObservable, observable, action, runInAction,computed } from "mobx"
import axios from 'axios'

// 3. 组件获取store状态，并显示到组件中(使用装饰器实现)
class CounterStore {
  constructor() {
    makeObservable(this)
  }
  @observable
  count = 0 // 可观测
  @observable
  users = [] // 可观测
  @action.bound
  increment() {
    this.count = this.count + 1
  }
  @action.bound
  decrement() {
    this.count = this.count - 1
  }
  // 异步获取数据
  @action.bound
  async getData() {
    let { data } = await axios.get('https://api.github.com/users')
    runInAction(() => this.users = data)
  }
  @computed get getResult() {
    return this.count * 10
  }
}
const counter = new CounterStore()
export default counter