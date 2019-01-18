/*
 * @Author: 张培培
 * @Github: https: //github.com/ZiMingDaYou
 * @Date: 2019-01-18 15:30:23
 * @LastEditors: 张培培
 * @LastEditTime: 2019-01-18 15:40:13
 */
var _tools = require('util/tools.js');

var _cart = {
    //获得购物车数量
    getCartCount: function (resolve, reject) {
        _tools.request({
            url: _tools.getServserURL('/cart/get_cart_product_count.do'),
            success: resolve,
            error: reject
        });
    }
}
module.exports = _cart;