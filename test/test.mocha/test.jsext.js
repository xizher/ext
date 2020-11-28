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
  describe('.$equal()', () => {
    it('数组全部项相等即为真', () => {
      const test = [1, 2, 3]
      const test2 = [1, 2, 3]
      assert(test.$equal(test2) === true)
    })
    it('数组全部项不等即为假', () => {
      const test = [1, 2, 4]
      const test2 = [1, 2, 3]
      assert(test.$equal(test2) !== true)
    })
    it('数组长度不等即为假', () => {
      const test = [1, 2, 4]
      const test2 = [1, 2]
      assert(test.$equal(test2) !== true)
    })
  })
  describe('.$findItem()', () => {
    it('寻找到正确的对象', () => {
      const test = [
        { a: 1, b: 2 },
        { a: 2, b: 4 },
        { a: 3, b: 6 },
      ]
      const test2 = test.$findItem('a', 1)
      assert(test2.b === 2)
    })
  })
  describe('.$findItems()', () => {
    it('寻找到正确的对象集', () => {
      const test = [
        { a: 1, b: 2 },
        { a: 2, b: 4 },
        { a: 1, b: 6 },
      ]
      const test2 = test.$findItems('a', 1)
      assert(test2.length === 2 && test2[0].b === 2 && test2[1].b === 6)
    })
  })
  describe('.$propToArr', () => {
    it('获得到正确的属性项', () => {
      const test = [
        { a: 1, b: 2 },
        { a: 2, b: 4 },
        { a: 1, b: 6 },
      ]
      const test2 = test.$propToArr('b')
      assert(test2.length === 3, test2.$equal([2, 4, 6]))
    })
  })
  describe('.$sum()', () => {
    it('1+2+3+4 值为 10', () => {
      const test = [1, 2, 3, 4]
      assert(test.$sum() === 10)
    })
  })
  describe('.$last()', () => {
    it('[1, 2, 3, 4] 最后一位是 4', () => {
      const test = [1, 2, 3 , 4]
      assert(test.$last() === 4)
    })
  })
  describe('.$max()', () => {
    it('[1, 2, 3, 4] 最大是 4', () => {
      const test = [1, 2, 3 , 4]
      assert(test.$max() === 4)
    })
  })
  describe('.$min()', () => {
    it('[1, 2, 3, 4] 最小是 1', () => {
      const test = [1, 2, 3 , 4]
      assert(test.$min() === 1)
    })
  })
  describe('.$ave()', () => {
    it('[1, 2, 3, 4] 平均值是 2.5', () => {
      const test = [1, 2, 3, 4]
      const test2 = test.$ave()
      assert(test2 === 2.5)
    })
  })

})