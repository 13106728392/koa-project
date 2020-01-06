const Koa = require('koa')
const Router = require('koa-router')
const cheerio = require('cheerio')
const superagent = require('superagent')
const app = new Koa()
const router = new Router();
const dbUtils = require('./utils/db-util')

router.get('/', function (ctx, next) {
  url = 'http://nvzhuang.ecduo.cn/'; //地址

  superagent
    .get(url)
    .set('charset', 'utf-8')
    // .set('Content-Type', 'application/x-www-form-urlencoded')
    .then(res => {
      let html = res.text,
        $ = cheerio.load(html, {
          decodeEntities: false
        }) //用cheerio解析页面数据
      let arr = [];

      $(".nv_content .section-content .goods_for_like_collect .pic img").each((index, element) => {
        if (element.attribs.width || element.attribs.height) {
          // let ii =  ((element.attribs.alt).split('/')[0]).replace(/\s+/g, "")
          // console.log(ii)
          let obj = {
            product_id: (new Date().getTime()) + index,
            product_name: ((element.attribs.alt).split('/')[0]).replace(/\s+/g, ""),
            product_icon: element.attribs['data-original'],
            width: element.attribs.width,
            height: element.attribs.height,
          }
          arr.push(obj)
        }
      });

      $(".nv_content .section-content .goods_for_like_collect .div2 .warp1 .loginLook span").each((indexs, obj) => {
        let objs = (obj.children[0].data).replace(/\s+/g, ""); //价格
        arr[indexs]['product_price'] = objs
        // console.log(objs)
      });

      $(".nv_content .section-content .goods_for_like_collect .div2 .warp1 .xiaoliang span").each((indexss, arrs) => {
        arr[indexss]['product_stock'] = arrs.children[0].data //销量
      });

      
      for (let index = 0; index < arr.length; index++) {
        let element = arr[index]
        let result = user.create(element)
        console.log(result)
      }
      ctx.body = arr;
    }).catch(err => {
      console.log(err)
    });
});


const user = {
  async create(model) {
    let result = await dbUtils.insertData('product_info', model)
    return result
  }
}


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('[服务已开启,访问地址为：] http://127.0.0.1:3000/');
});
