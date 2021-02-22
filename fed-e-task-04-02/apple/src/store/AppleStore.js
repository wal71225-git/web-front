import { observable, action, makeObservable, computed } from 'mobx'
class AppleStore {
  @observable apples = []
  constructor() {
    makeObservable(this)
  }
  @action.bound pickApple() {
    let weight = Math.floor(200 + Math.random() * 50);
    this.apples.push({
      id: Math.floor(Math.random()*(1 - 10000) + 10000),
      weight: weight,
      isEaten: false
    })
  }
  @action.bound eatApple(index) {
    this.apples[index].isEaten = true
  }
  @computed get status() {
    let status = {
      appleNow: {
          quantity: 0,
          weight: 0
      },
      appleEaten: {
          quantity: 0,
          weight: 0
      }
    }
      this.apples.forEach(apple => {
          let selector = apple.isEaten ? 'appleEaten':'appleNow';
          status[selector].quantity ++;
          status[selector].weight += apple.weight;
      });
      return status;
  }
}
const apple = new AppleStore()
export default apple