import {
// Stack,
// Queue,
  Graph,
  GraphDirected,
  breadthFirstSearch,
} from '../../datastructure'

//#region 栈 测试
// const st = new Stack()


// console.log(st.isEmpty())
// st.push(1)
// st.push(3)
// st.push(2)
// console.log(st.toString())
// st.pop()
// st.push(5)
// // st.on('after-push', evt => {
// //   console.log(evt)
// //   console.log(st.size())
// //   console.log(st.isEmpty())
// // }, { msg: 'hhh' })
// // st.push(4)

// // st.pop()

// console.log(st.toString())
// console.log(st.toArray())
//#endregion

//#region 队列 测试
// const qu = new Queue()

// qu.enqueue(2)
// qu.enqueue(3)
// qu.enqueue(4)
// console.log(qu.toString())
// qu.dequeue()
// qu.on('enqueue', evt => {
//   console.log(evt)
// })
// qu.enqueue(1)
// console.log(qu.front())

// console.log(qu.toString())

//#endregion

//#region 图 测试
// const graph = new GraphDirected()
const graph = new Graph()
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
myVertices.forEach((v) => {
  graph.addVertex(v)
})
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString())
const result = breadthFirstSearch(graph, 'C')
console.log(result)

//#endregion
