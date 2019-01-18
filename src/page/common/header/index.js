/*
 * @Author: 张培培
 * @Github: https: //github.com/ZiMingDaYou
 * @Date: 2019-01-18 17:51:30
 * @LastEditors: 张培培
 * @LastEditTime: 2019-01-18 17:55:52
 */
require('./index.css');
/*
 * @Author: 张培培
 * @Github: https: //github.com/ZiMingDaYou
 * @Date: 2019-01-18 12:46:51
 * @LastEditors: 张培培
 * @LastEditTime: 2019-01-18 17:57:46
 */

require('./index.css');
var _tools = require('util/tools.js');
var header = {
    init: function () {
        this.bindEvent(),
            this.loadCartCount(),
            this.loadUserInfo()
        return this;
    }
};
header.init();