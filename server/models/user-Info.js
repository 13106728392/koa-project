const dbUtils = require('./../utils/db-util')

const user = {

  /**
   * 数据库创建用户
   * @param  {object} model 用户数据模型
   * @return {object}       mysql执行结果
   */
  async create(model) {
    let result = await dbUtils.insertData('user_info', model)
    return result
  },

  /**
   * 查找一个存在用户的数据
   * @param  {obejct} options 查找条件参数
   * @return {object|null}        查找结果
   */
  async getExistOne(options) {
    let _sql = `
    SELECT * from user_info
      where email="${options.email}" or name="${options.name}"
      limit 1`
    let result = await dbUtils.query(_sql)
    if (Array.isArray(result) && result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  /**
   * 根据用户名和密码查找用户
   * @param  {object} options 用户名密码对象
   * @return {object|null}         查找结果
   */
  async getOneByUserNameAndPassword(options) {
    let _sql = `
    SELECT * from user_info
      where password="${options.password}" and name="${options.name}"
      limit 1`
    let result = await dbUtils.query(_sql)
    if (Array.isArray(result) && result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  /**
   * 根据用户名查找用户信息
   * @param  {string} userName 用户账号名称
   * @return {object|null}     查找结果
   */
  async getUserInfoByUserName(userName) {

    let result = await dbUtils.select(
      'user_info',
      ['id', 'email', 'name', 'detail_info', 'create_time', 'modified_time', 'modified_time'])
    if (Array.isArray(result) && result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },


  /**
   *获取商品列表
   * @param  
   * @return {object|null}     查找结果
   */
  async getMenuList() {

    let result = await dbUtils.select(
      'product_info', "*")
    if (Array.isArray(result) && result.length > 0) {
      result = result
    } else {
      result = null
    }
    return result
  },


  /**
   * 根据用户名查找用户信息
   * @param  {string} id 用户账号名称
   * @return {object|null}     查找结果
   */
  async getcanCall(userName) {
    console.log(userName)
    let result = await dbUtils.query(`SELECT * FROM _mysql_session_store where id="${userName.id}" limit 1`)

    if (Array.isArray(result) && result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },


  /**
   * 退出登录
   * @param  {string} id 用户账号名称
   * @return {object|null}     查找结果
   */
  async delcanCall(userName) {
    console.log(userName)
    let result = await dbUtils.deleteDataById('_mysql_session_store', userName.id)
    if (Array.isArray(result) && result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

   /**
   * 删除商品
   * @param  {string} id 用户账号名称
   * @return {object|null}     查找结果
   */
  async delProduct(Product) {
    let result = await dbUtils.deleteDataById('product_info', Product.id)
    if(result.affectedRows==0){
      result = null
    }else{
      result =true
    }
    return result
  },





}


module.exports = user
