// 用来封装所有的请求
import service from './index';

export default {
  // 所有的方法必须return
  // 获取首页数据(1)
  homeGoods() {
    return service.get(`/goods/home`)
  },
  // 为你推荐(2)
  goodsRecommend() {
    return service.get(`/goods/recommend`)
  },
  // 所有商品(3)
  //   参数: 
  // page: 请求页数(必填)
  // size: 请求条数(必填)
  // sort: 排序方式 1为升序 -1为降序
  // priceGt: 价格区间 从多少开始
  // priceLte: 价格区间 到哪结束
  allGoods(page, size, sort, priceGt, priceLte) {
    return service.get(`/goods/allGoods?page=${page}&size=${size}&sort=${sort}&priceGt=${priceGt}&priceLte=${priceLte}`)
  },
  //  搜索商品(4)
  //   参数:
  // keyword: 关键字
  searchGoods(keyword) {
    return service.get(`/goods/search?keyword=${keyword}`)
  },
  // 商品详情(5)
  //   参数:
  // productId: 商品id
  goodsDetail(productId) {
    return service.get(`/goods/detail?productId=${productId}`)
  },
  // 登陆(6)
  //   参数:
  // username: 用户名
  // password: 密码
  login({ username, password }) {
    return service.post(`/users/login`, { username, password })
  },
  // 注册(7)
  //   参数:
  // username: 用户名
  // password: 密码
  register({ username, password }) {
    return service.post(`/users/register`, { username, password })
  },
  // 加入购物车(8)
  //   参数:
  // productId: 商品id
  addCart(productId) {
    return service.post(`/goods/addCart`,{productId})
  },
  // 收藏单个商品(9)
  collection(goods) {
    return service.post(`/collection`, goods)
  },
  // 取消收藏(10)
  cancelCollection({ id }) {
    return service.post(`/cancelCollection`, { id })
  },
  // 查询商品是否已收藏(11)
  isCollection({ id }) {
    return service.post(`/isCollection`, { id })
  },
  // 加入购物车(12)
  addShop({ id }) {
    return service.post(`/addShop`, { id })
  },
  // 退出登录(13)
  loginOut({ }) {
    return service.post(`/loginOut`, {})
  },
  // 获取用户信息(14)
  queryUser({ }) {
    return service.post(`/queryUser`, {})
  },
  // 修改保存用户信息(15)
  saveUser({ gender, year, month, day, id, nickname }) {
    return service.post(`/saveUser`, { gender, year, month, day, id, nickname })
  },
  // 查询用户订单数量(16)
  orderNum() {
    return service.get(`/myOrder/orderNum`)
  },
  // 商品评论(17)
  goodsComment({ id, rate, content, anonymous, _id, order_id, image }) {
    return service.post(`/goodsOne/comment`, { id, rate, content, anonymous, _id, order_id, image })
  },
  // 获取登录注册默认验证码(18)
  verify() {
    return service.get(`/verify`)
  },
  // 查询用户收货地址(19)
  getAddress() {
    return service.get(`/getAddress`)
  },
  // 查询默认收货地址(20)
  getDefaultAddress() {
    return service.get(`/getDefaultAddress`)
  },
  // 设置默认收货地址(21)
  setDefaultAddress(id) {
    return service.post(`/setDefaultAddress`, { id })
  },
  // 增加收货地址(22)
  address({ name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id }) {
    return service.post(`/address`, { name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id })
  },
  // 删除地址(23)
  deleteAddress({ id }) {
    return service.post(`/deleteAddress`, { id })
  },
  // 查询我的收藏(24)
  collectionList() {
    return service.get(`/collection/list`)
  },
  // 注册(25)
  register({ nickname, password, verify }) {
    return service.post(`/register`, { nickname, password, verify })
  },
  // 登录(26)
  login({ nickname, password, verify }) {
    return service.post(`/login`, { nickname, password, verify })
  },
  // 订单查询(27)
  getMyOrder() {
    return service.get(`/myOrder`)
  },
  // 查询已评价(28)
  alreadyEvaluated() {
    return service.get(`/alreadyEvaluated`)
  },
  // 查询未评价(29)
  tobeEvaluated() {
    return service.get(`/tobeEvaluated`)
  },
  // 查询单条评论(30)
  evaluateOne(id, _id) {
    return service.post(`/evaluateOne`, { id, _id })
  }


}