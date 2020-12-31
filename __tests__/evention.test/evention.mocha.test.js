import assert from 'assert'
import { Evention } from '../../evention/evention.js'

class Obj extends Evention {
  constructor () {
    super()
    this.value = 0
  }

  increase () {
    this.value++
    this.fire('increase', {
      val: this.value
    })
  }

  decrease () {
    this.value--
    this.fire('decrease', {
      val: this.value
    })
  }

  reset () {
    this.value = 0
    this.fire('reset')
  }

}

describe('事件监听处理器测试', () => {

})