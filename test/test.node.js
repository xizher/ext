const { readFileAsync, writeFileAsync, pgSql } = require('../nodejs')

readFileAsync('test/assets/test.txt').then(data => {
  console.log(data)
  writeFileAsync('test/assets/test.txt', new Date().getTime())
})

pgSql.setConfig({
  port: 5432,
  host: '39.107.24.26',
  user: 'postgres',
  password: 'postgis',
  database: 'wuxizhefun'
})

pgSql.exec('select * from tb_money').then(res => {
  console.log(res.rows)
})
