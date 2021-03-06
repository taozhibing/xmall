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
    return service.post(`/goods/addCart`, { productId })
  },
  // 查询购物车(9)
  getCarts() {
    return service.get(`/goods/getCarts`)
  },
  // 删除购物车的商品(10)
  //   参数
  // productId: 商品_id
  delCart(productId) {
    return service.post(`/goods/delCart`, { productId })
  },
  // 修改购物车数量(11)
  //   参数
  // productId: 商品_id
  // count: 数量
  editCart({ productId, count }) {
    return service.post(`/goods/editCart`, { productId, count })
  },
  // 获取全部收获地址(12)
  getAddress() {
    return service.get(`/address/list`)
  },
  // 添加收获地址(13)
  //   参数:
  //  username: 用户名
  //  phone: 电话
  //  address: 地址
  // isDefault: 是否为默认地址
  addAddress({ username, phone, address, isDefault }) {
    return service.post(`/address/addAddress`, { username, phone, address, isDefault })
  },
  // 设置默认地址(14)
  //   参数:
  // 1.addressId: 地址的_id
  setDefault(addressId) {
    return service.post(`/address/setDefault`, {addressId})
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