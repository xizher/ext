// import { deepExtent } from '../js.utils'

// import { bubbleSort, insertionSort, mergeSort, quickSort, selectionSort, shellSort } from "../datastructure/sort/sort.js"

// import { LinkedList } from '../datastructure/linkedlist/linkedlist'

// let graph = new Graph();
// let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
// myVertices.forEach((v) => {
//     graph.addVertex(v);
// });
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');

// // console.log(breadthFirstSearch(graph, 'A', value => console.log(`visited vertex: ${value}`)))

// console.log(breadthFirstSearchV2(graph, 'A'))

// let obj1 = { a: { b: 2 } }
// let obj2 = deepCopy(obj1)
// // obj2.c = 2
// obj2.a.b = 3
// console.log(obj1)
// console.log(obj2)

// const obj1 = { a: 1, b: { c: 2, e: 1 } }
// const obj2 = { a: 2, b: { c: 3, d: 4 } }
// const t = deepExtent(true, obj1, obj2)
// console.log(t)

// const linkedList = new LinkedList()

// linkedList.append(1)
// linkedList.append(2)
// linkedList.append(3)
// linkedList.insert(1, -1)
// linkedList.insert(0, 0)
// linkedList.insert(0, 6)
// linkedList.insert(1, 2)
// console.log(linkedList.toArray())
// console.log(linkedList.indexOf(2))
// console.log(linkedList.removeAt(2))
// console.log(linkedList.removeAll(2))

// console.log(linkedList.size(), linkedList.toArray())

// const arr = [3, 2, 4, 5, 1]
// const arr2 = [{ a: 3, b: 1 },
//   { a: 2, b: 1 },
//   { a: 4, b: 1 },
//   { a: 5, b: 1 },
//   { a: 1, b: 1 },]

// selectionSort(arr, {
//   desc: true
// })
// selectionSort(arr2, {
//   desc: false,
//   callback: item => item.a
// })

// console.log(arr)
// console.log(arr2)