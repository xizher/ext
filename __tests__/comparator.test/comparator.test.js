import { Comparator } from '../../comparator/comparator.js'

const obj1 = {
  a: 1
}
const obj2 = {
  a: 2
}

const comparator = new Comparator((a, b) => a.a - b.a)

console.log(comparator.lessThan(obj1, obj2))
