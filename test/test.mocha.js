require('babel-register')
require('../js.ext')
const assert = require('assert')
const faker = require('faker')
const { RegExpHelper } = require('../js.utils')

new T()
  ['RegExpHelper 正整数 判断']()
  ['RegExpHelper 非负整数 判断']()
  ['RegExpHelper email 判断']()
  ['RegExpHelper url 判断']()


function T () {
  this['RegExpHelper url 判断'] = () => {
    describe('RegExpHelper email 判断', () => {
      for (let i = 0; i < 5; i++) {
        const url = faker.internet.url()
        it(`${url} 是 url`, () => {
          assert(RegExpHelper['url'](url) === true)
        })
      }
      it('ftp://aaa.bbb 是 url', () => {
        assert(RegExpHelper['url']('ftp://aaa.bbb') === true)
      })
      it('www.baidu.com 是 url', () => {
        assert(RegExpHelper['url']('http://www.baidu.com?a=b&b=c') === true)
      })
    })
    return this
  }
  this['RegExpHelper email 判断'] = () => {
    describe('RegExpHelper email 判断', () => {
      for (let i = 0; i < 5; i++) {
        const email = faker.internet.email()
        it(`${email} 是 email`, () => {
          assert(RegExpHelper['email'](email) === true)
        })
      }
      it('eee@www 不是 email', () => {
        assert(RegExpHelper['email']('eee@www') !== true)
      })
      it('eee@www.a 是 email', () => {
        assert(RegExpHelper['email']('eee@www.a') === true)
      })
    })
    return this
  }
  this['RegExpHelper 非负整数 判断'] = () => {
    describe('RegExpHelper 非负整数 判断', () => {
      it('0 是 非负整数', () => {
        assert(RegExpHelper['非负整数'](0) === true)
      })
      it('-1 不是 非负整数', () => {
        assert(RegExpHelper['非负整数'](-1) !== true)
      })
      it('1 是 非负整数', () => {
        assert(RegExpHelper['非负整数'](1) === true)
      })
      it('1.1 不是 非负整数', () => {
        assert(RegExpHelper['非负整数'](1.1) !== true)
      })
      it('1n (BigInt) 是 非负整数', () => {
        assert(RegExpHelper['非负整数'](1n) === true)
      })
      it('{String} 1.0 不是 非负整数', () => {
        assert(RegExpHelper['非负整数']('1.0') !== true)
      })
      it('{Number} 1.0 是 非负整数', () => {
        assert(RegExpHelper['非负整数'](1.0) === true)
      })
    })
    return this
  }
  this['RegExpHelper 正整数 判断'] = () => {
    describe('RegExpHelper 正整数 判断', () => {
      it('0 不是 正整数', () => {
        assert(RegExpHelper['正整数'](0) !== true)
      })
      it('-1 不是 正整数', () => {
        assert(RegExpHelper['正整数'](-1) !== true)
      })
      it('1 是 正整数', () => {
        assert(RegExpHelper['正整数'](1) === true)
      })
      it('{String} 1 是 正整数', () => {
        assert(RegExpHelper['正整数']('1') === true)
      })
      it('{String} 1.0 不是 正整数', () => {
        assert(RegExpHelper['正整数']('1.0') !== true)
      })
      it('{Number} 1.0 是 正整数', () => {
        assert(RegExpHelper['正整数'](1.0) === true)
      })
    })
    return this
  }
}

function rT () {

}


