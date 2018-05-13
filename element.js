// DOM加载后执行
Ext.onReady(function () {
    // // 获取元素，改变其高度
    // var myDiv1 = Ext.get('div1');
    // // 设置高度
    // myDiv1.setHeight(200);
    // // 设置高度
    // myDiv1.setWidth(300);
    // // 同时设置宽高
    // myDiv1.setSize(300,300);
    //
    //
    // // 创建字符节点(也就是添加向元素中字符串)
    // myDiv1.createChild("添加一个字符子元素");
    //
    // // 创建添加子节点
    // myDiv1.createChild({
    //     tag: 'div',
    //     id: 'cid',
    //     class: "cls",
    //     html: '添加一个div子元素',
    //     style: 'color:#EEOOOO;padding:5px;border:1px solid blue'
    // });
    //
    // // 嵌套创建节点
    // myDiv1.createChild({
    //     tag: 'div',
    //     html: '嵌套创建子元素',
    //     style: 'color:#EEOOOO;margin:5px;padding:5px; border:1px dashed red;',
    //     children: {
    //         tag :'div',
    //         id: 'ccid',
    //         html: '我是div中的子元素',
    //         style: 'color:#EEOOOO;border:1px solid pink'
    //     }
    // });
    //
    // //在顶部插入创建第一个节点(这两者效果相同)
    // myDiv1.insertFirst({
    //     tag: 'p',
    //     html: '我是顶部第一个P元素'
    // });
    // myDiv1.createChild({
    //     tag: 'div',
    //     id: 'cids',
    //     class: "cls",
    //     html: '我是顶部第一个DIV元素',
    //     style: 'color:#EEOOOO;padding:5px;border:1px solid blue'
    // },myDiv1.dom.childNodes[0]);
    //
    // // 根据索引位置创建节点
    // myDiv1.createChild({
    //     tag: 'div',
    //     id: 'cid',
    //     class: "cls",
    //     html: '我是添加的第五个元素',
    //     style: 'color:#EEOOOO;padding:5px;border:1px solid black'
    // },myDiv1.dom.childNodes[5]);




    // var mydiv2 = Ext.get('div2');
    // // 删除第一个元素
    // mydiv2.down('div:first-child').remove();
    // // 删除最后一个元素
    // mydiv2.down('div:last-child').remove();

    Ext.get('child4').load({
        url:'htmlFragment.html',
        scripts: true,
        loadMsg:'正在加载'
    });
});