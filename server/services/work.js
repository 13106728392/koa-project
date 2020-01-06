/**
 * 作业操作
 */

const userModel = require('./../models/user-info')


const workCode = {
  /**
   * 获取菜单操作
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
   async getMenuList (){
     let result = await userModel.getMenuList()
     return result
   },

  /**
   * 获取删除商品操作
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
  async delProduct (data){
    let result = await userModel.delProduct(data)
    return result
  }


}

module.exports = workCode
