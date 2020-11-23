require('babel-register')
const assert = require('assert');
require('../js.ext')

const testObj = {
  'string.ext' () {
    describe('string.ext', () => {
      it(`.trimAll():
        ' xxx xx '.trimAll() -> 'xxxxx'`, () => {
        const testStr = ' xxx xx '
        assert(testStr.trimAll() === 'xxxxx')
      })
    
      it(`.contain():
        'cd'.contain(['ab', 'cd', 'df'] -> true
        'cd'.contain(['ab', 'cd2', 'df'] -> false`, () => {
        const testStr = 'cd'
        assert(testStr.contain(['ab', 'cd', 'df']) === true)
        assert(testStr.contain(['ab', 'cd2', 'df']) === false)
      })
      
      it(`.replaceAll():
        'AA_AB_BBC_DA'.replaceAll('B', 'A') -> 'AA_AA_AAC_DA'
        'AA_AB_BBC_DA'.replaceAll('_', '') -> 'AAABBBCDA'`, () => {
        const testStr = 'AA_AB_BBC_DA'
        assert(testStr.replaceAll('B', 'A') === 'AA_AA_AAC_DA')
        assert(testStr.replaceAll('_', '') === 'AAABBBCDA')
      })
    })
  },
  'date.ext' () {
    describe('date.ext', () => {
      const date = new Date('2020/01/01 08:14:50')
      const MSECONDS_A_DAY = 86400000
      it(`.format():
        date.format('yyyy-MM-dd') -> '2020-01-01'
        date.format('hh:mm:ss') -> '08:14:50'`, () => {
        assert(date.format('yyyy-MM-dd') === '2020-01-01')
        assert(date.format('hh:mm:ss') === '08:14:50')
      })
      // it(`.getNextDate():
      //   date.getNextDate().getTime() - 86400000 -> date.getTime()`, () => {
      //     assert(date.getNextDate().getD === date.getTime())
      //     assert(date.getNextDate() === date.getTime())
      //   })
    })
  }
}

testObj["string.ext"]()
testObj["date.ext"]()
