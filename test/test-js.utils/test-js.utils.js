import {
// guid,
// deepCopy,
// getRootPath,
// randomRange,
  enCrypto, deCrypto,
} from '../../js.utils/index'

// console.log(guid())
// console.log(guid())

// const obj = { a: 1 }
// const obj2 = deepCopy(obj)
// obj2.a = 2
// console.log(obj, obj2)

// // console.log(window && getRootPath()) // no windows

// console.log(randomRange(2, 3), randomRange(2, 3))

console.log(enCrypto('test'))
console.log(deCrypto(enCrypto('test')))

