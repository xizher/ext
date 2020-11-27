const assert = require('assert')
require('../../js.ext')

describe('Array 扩展', () => {
  describe('.$insert()', () => {
    it('在数组第二位插入', () => {
      const test = [3, 2, 1]
      test.$insert(1, 5)
      assert(test[1] === 5)
    })
  })
  describe('.$remove()', () => {
    it('删除数组第二位', () => {
      const test = [3, 2, 1]
      assert(test.$remove(1) === 2)
    })
    it('删除数组第一位', () => {
      const test = [3, 2, 1]
      assert(test.$remove(0) !== test[0])
    })
  })
  describe('.$clear()', () => {
    it('清空数组', () => {
      const test = [3, 2, 1]
      test.$clear()
      assert(test.length === 0)
    })
  })
  describe('.$reset()', () => {
    it('重新设置数组', () => {
      const test = [3, 2, 1]
      test.$reset(1, 2)
      assert(test.length === 2 && test[0] === 1)
    })
  })
  describe('.$removeByValue()', () => {
    it('删除值为2的项（第一项）', () => {
      const test = [3, 2, 4, 2, 2]
      test.$removeByValue(2)
      assert(test.length === 4 && test[1] === 4)
    })
    it('删除值为2的所有项', () => {
      const test = [3, 2, 4, 2, 2]
      test.$removeByValue(2, { many: true })
      assert(test.length === 2 && test[0] === 3 && test[1] === 4)
    })
  })
  describe('.$getUnique()', () => {
    it('数据去重后 等于 其唯一值', () => {
      let test = [3, 2, 4, 2, 2]
      test = test.$getUnique()
      assert(test.length === 3 && test[0] === 3 && test[1] === 2)
    })
    it('方法执行后不影响自身', () => {
      const test = [3, 2, 4, 2, 2]
      const test2 = test.$getUnique()
      assert(test.length !== test2.length)
    })
  })
})