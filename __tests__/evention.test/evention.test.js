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

const obj = new Obj()

const f = obj.on('increase', event => {
  console.log(event)
})
obj.once('decrease', event => {
  console.log(event)
})

obj.increase()
obj.off('increase', f)
obj.increase()
obj.decrease()
obj.decrease()
