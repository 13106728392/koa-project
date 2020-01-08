const workCode = require('./../services/work')
const userCode = require('./../codes/user')

module.exports = {
  async indexPage(ctx) {
    ctx.body = ctx
    // 判断是否有session
    if (ctx.session && ctx.session.isLogin && ctx.session.userName) {
      let userResult = await workCode.getMenuList()
      userCode.DODE_MEAGESS['success'] = true
      userCode.DODE_MEAGESS['data'] = userResult
      userCode.DODE_MEAGESS['code'] = 200
      ctx.body = userCode.DODE_MEAGESS

    } else {
      let result = {
        success: false,
        message: userCode.FAIL_USER_NO_LOGIN,
        data: null,
        code: '304'
      }
      // 没有登录态则跳转到错误页面
      ctx.body = result
    }
  },


  //删除商品
  async delProduct(ctx) {
    ctx.body = ctx
    let data = ctx.request.body
    // 判断是否有session
    if (ctx.session && ctx.session.isLogin && ctx.session.userName) {
      let userResult = await workCode.delProduct(data)
      if (userResult == null) {
        let result = {
          success: false,
          message: '删除失败',
          data: null,
          code: '304'
        }
        // 没有登录态则跳转到错误页面
        ctx.body = result
      } else {
        userCode.DODE_MEAGESS['success'] = true
        userCode.DODE_MEAGESS['data'] = []
        userCode.DODE_MEAGESS['code'] = 200
        ctx.body = userCode.DODE_MEAGESS
      }
    } else {
      let result = {
        success: false,
        message: userCode.FAIL_USER_NO_LOGIN,
        data: null,
        code: '304'
      }
      // 没有登录态则跳转到错误页面
      ctx.body = result
    }
  },
  //更新修改
  async  updateProduct(ctx){
    ctx.body = ctx
    let data = ctx.request.body
    // 判断是否有session
    if (ctx.session && ctx.session.isLogin && ctx.session.userName) {
      let userResult = await workCode.updateProduct(data)
      
      if(userResult==true){
        userCode.DODE_MEAGESS['success'] = true
        userCode.DODE_MEAGESS['code'] = 200
        ctx.body = userCode.DODE_MEAGESS
      }else{
        let result = {
          success: false,
          message: '更新失败',
          data: null,
          code: '304'
        }
        // 没有登录态则跳转到错误页面
        ctx.body = result
      }
    } else {
      let result = {
        success: false,
        message: userCode.FAIL_USER_NO_LOGIN,
        data: null,
        code: '304'
      }
      // 没有登录态则跳转到错误页面
      ctx.body = result
    }
  }


















}
