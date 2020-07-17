const Koa = require('koa')

const static = require('koa-static')
const path = require('path')

const app = new Koa()

app.use(static(path.join(__dirname, '../public')))

app.listen(3000, () => {
  console.log('the server running at 3000')
})