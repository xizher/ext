import {
  CustomEvent
} from '../../customevent'

class Test extends CustomEvent {
  // constructor () {
  //   super()
  // }

  testOn () {
    this.fire('test-on')
    console.log('testOn')
  }
}

const test = new Test()

test.on('test-on', () => {
  console.log('listen test-on')
})
const testOn2 = test.on('test-on', () => {
  console.log('listen test-on2')
})


test.testOn()
test.one('test-on', () => {
  console.log('listen test-on3')
})
test.testOn()
test.off('test-on', testOn2)
test.testOn()
// setTimeout(() => {
//   test.testOn()
//   setTimeout(() => {
//     test.testOn()
//   }, 1000)
// }, 1000)
