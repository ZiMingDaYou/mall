var _tools = require('util/tools.js');
var html = '<div>{{data}}</div>'
var data = {
    data : 123
};
console.log(_tools.renderHtml(html,data));