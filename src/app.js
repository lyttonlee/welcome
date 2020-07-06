const Koa = require('koa')

const static = require('koa-static')

const app = new Koa()

app.use(static('../public'))

app.listen(3000, () => {
  console.log('the server running at 3000')
})