import assert from 'assert'
import { Comparator } from '../../comparator/comparator.js'

describe('比较器测试', () => {

  const obj1 = {
    a: { v: 1 },
    b: { v: 3 },
    c: { v: 4 }
  }
  const obj2 = {
    a: { v: 2 },
    b: { v: 3 },
    c: { v: 3 }
  }
  
  const num1 = 1
  const num2 = 2
  const num3 = 3
  const num4 = 4
  const num5 = 4

  const comparator_s = new Comparator()
  const comparator_c = new Comparator((a, b) => a.v - b.v)

  describe('小于', () => {
    it('简单比较', () => {
      assert(comparator_s.lessThan(num3, num2) === false)
      assert(comparator_s.lessThan(num1, num2) === true)
    })
    it('复杂比较', () => {
      assert(comparator_c.lessThan(obj1.c, obj2.c) === false)
      assert(comparator_c.lessThan(obj1.a, obj2.a) === true)
    })
  })
  
  describe('等于', () => {
    it('简单比较', () => {
      assert(comparator_s.equal(num2, num5) === false)
      assert(comparator_s.equal(num4, num5) === true)
    })
    it('复杂比较', () => {
      assert(comparator_c.equal(obj1.a, obj2.a) === false)
      assert(comparator_c.equal(obj1.b, obj2.b) === true)
    })
  })
  
  describe('大于等于', () => {
    it('简单比较', () => {
      assert(comparator_s.greaterThanOrEqual(num2, num5) === false)
      assert(comparator_s.greaterThanOrEqual(num5, num4) === true)
    })
    it('复杂比较', () => {
      assert(comparator_c.greaterThanOrEqual(obj1.a, obj2.a) === false)
      assert(comparator_c.greaterThanOrEqual(obj1.c, obj2.c) === true)
    })
  })

})
