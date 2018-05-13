Ext.onReady(function () {
    var tplData = [
        {
            color : "#FFE9E9",
            name : "张三",
            age : 25
            // cars : ["张","周","刘"]
        },
        {
            color : "#FFE9FF",
            name : "李四",
            age : 21
            // cars : ["宋","朱","李"]
        },
        {
            color : "#FFE9AA",
            name : "王五",
            age : 19
            // cars : ["王","赵","钱"]
        }];

var myTpl =  new Ext.XTemplate(
    '<tpl for=".">',
        '<div style="background-color:{color};margin: 10px;">',
        '<b> Name : </b> {name:trim} <br>',
        '<b> Age : </b> {age} <br>',
        '</div>',
    '</tpl>'
);

myTpl.compile();
myTpl.append(document.body,tplData);

    var data = {
        name: '张三',
        job: 'Go程序员',
        company: '中孚',
        email: '111111111@163.com',
        address: '山东省济南市齐鲁软件园',
        city: '济南',
        state: '正常',
        zip: '430000',
        drinks: ['绿茶', '红酒', '咖啡'],
        friends: [{
            name: '李四',
            age: 26,
            like: '读书'
        }, {
            name: '王五',
            age: 26,
            like: '足球'
        }, {
            name: '赵六',
            age: 31,
            like: '游戏'
        }]
    };

    var tpl = new Ext.XTemplate(
        '<table cellpadding=0 cellspacing=0 border=1 width=400px>',
        '<tr><td colspan=2 align=center><b>{name}的个人资料</b></td></tr>',
        '<tr><td>姓名：</td><td>{name}</td></tr>',
        '<tr><td>工作：</td><td>{job}</td></tr>',
        '<tr><td>公司：</td><td>{company}</td></tr>',
        '<tr><td>地址：</td><td>{address}</td></tr>',
        '<tr><td>喜好饮品：</td><td>{drinks}</td></tr>',
        '<tr><td>他的好友：</td><td>',
        '<tpl for="friends">',
        '<p>{name}：{age}岁 {like}</p>',
        '</tpl></td></tr>',
        '</table>'
    );
    tpl.append(document.body, data);
});