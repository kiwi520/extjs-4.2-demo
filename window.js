Ext.onReady(function () {
    var win;
    var newWindow = function (btn) {
        if(!win){
            win = Ext.create('Ext.window.Window',{
                animateTarget: btn.el,
                html: '我的第一个window弹窗',
                closeAction: 'hide',
                id: 'myWin',
                height: 200,
                width: 300,
                constrain: true
            });
        }
        win.show();
    };

    new Ext.Button({
        renderTo: Ext.getBody(),
        text: '点我',
        style: 'margin: 100px',
        handler: newWindow
    });



    // 更多窗口配置

    var newWin = Ext.create('Ext.window.Window',{
        height: 75,
        width: 200,
        model: true,
        title: '这是一个rigid 窗口',
        html: 'main content！',
        plain: true, // true 内容背景变透明
        border: false, //无边框
        resizeable: false,// 防止改变窗口尺寸
        draggable: false, //防止窗口拖动
        closable: false, //隐藏关闭按钮
        buttonAlign: 'center', //按钮放于中心
        buttons : [
            {
                handler: function() {
                    newWin.close();
                },
                text: '点我关闭'
            }
        ]
    });

    newWin.show();
});