/**
 * 错误页面子路由
 */

const router = require('koa-router')()

module.exports = router.get('*',  async ( ctx ) => {
  console.log(ctx.session,'错误页面')
  const title = 'error'
  await ctx.render('error', {
    title
  })
})
