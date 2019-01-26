/*
 * @Author: 张培培
 * @Github: https: //github.com/ZiMingDaYou
 * @Date: 2019-01-18 14:26:04
 * @LastEditors: 张培培
 * @LastEditTime: 2019-01-18 20:58:05
 */
var _tools = require('util/tools.js');

var _user = {
    //检查登录状态
    checkLogin : function (resolve, reject) {
        _tools.request({
            url: _tools.getServerURL('/user/get_user_info.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    //登出
    logout: function (resolve, reject) {
        _tools.request({
            url: _tools.getServerURL('/user/logout.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    } 
}
module.exports = _user;
