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
  },


 /**
   * 修改商品操作
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
  async updateProduct (data){
    let product ={}
    product.product_name = data.product_name
    product.product_stock = data.product_stock
    product.product_price = data.product_price
    let result = await userModel.updateProduct(product,data.product_id)
    return result
  }

  

}

module.exports = workCode
