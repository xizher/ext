const { readFileAsync, writeFileAsync, pgSql, mongodbHelper, MongodbHelper } = require('../nodejs')

// readFileAsync('test/assets/test.txt').then(data => {
//   console.log(data)
//   writeFileAsync('test/assets/test.txt', new Date().getTime())
// })

// pgSql.setConfig({
//   port: 5432,
//   host: '39.107.24.26',
//   user: 'postgres',
//   password: 'postgis',
//   database: 'wuxizhefun'
// })

// pgSql.exec('select * from tb_money').then(res => {
//   console.log(res.rows)
// })

console.log(mongodbHelper)

mongodbHelper.setConfig({
  port: 27017,
  host: '39.107.24.26',
  user: 'wxzgis',
  pwd: 'wxzgis123',
  db: 'wxzgis'
})

// mongodbHelper
//   .useCollection('tb_account')
//   .delete({ username: 'test' })
//   .then(res => {
//     console.log(res)
//   })

// mongodbHelper
//   .useCollection('tb_account')
//   .insert({ username: 'test' })
//   .then(res => {
//     console.log(res)
//   })

// mongodbHelper
//   .useCollection('tb_account')
//   .update({ username: 'test' }, { gender: 'y' })
//   .then(res => {
//     console.log(res)
//   })

// mongodbHelper
//   .useCollection('tb_account')
//   .query({ username: 'test' })
//   .then(res => {
//     console.log(res)
//   })

// mongodbHelper
//   .useCollection('tb_account')
//   .updateFromOid('5fca2f2c343d162d3817d393', { gender: 'x' })
//   .then(res => {
//     console.log(res)
//   })

mongodbHelper
  .useCollection('tb_account')
  .queryFromOid('5fca2f2c343d162d3817d393')
  .then(res => {
    console.log(res)
  })