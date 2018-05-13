Ext.onReady(function () {
    // 生成按钮实例
    var myBtnHander = function (btn) {
            // Ext.MessageBox.alert('You clicked',btn.text);
            Ext.Msg.alert('You clicked',btn.text);
            // console.log('You clicked',btn.text);
        },
        fileBtn = Ext.create('Ext.button.Button',{
            handler: myBtnHander,
            text: 'File'
        }),
        editBtn = Ext.create('Ext.button.Button',{
            handler: myBtnHander,
            text:'Eidt'
        }),
        tbFil = new Ext.toolbar.Fill();

    //创建顶部工具栏
    var myTopToolbar = Ext.create('Ext.toolbar.Toolbar',{
       items: [
           fileBtn,
           editBtn,
           tbFil
       ]
    });

    // 创建底部工具栏
    var myBottonToolbar = [
        {
            handler: myBtnHander,
            text: '保存'
        },
        {
            handler: myBtnHander,
            text: '删除'
        },
        '->',
        '<b> Items open:1</b>'
    ];

    // 创建面板主板

    // var myPanel = Ext.create('Ext.panel.Panel',{
    //     width:200,
    //     height:150,
    //     title:'第一个面板实例',
    //     collapsible: true,
    //     renderTo: Ext.getBody(),
    //     tbar: myTopToolbar,
    //     bbar: myBottonToolbar,
    //     html: '我的第一个面板！',
    // });



    //添加按钮和工具
    var myNewPanel = Ext.create('Ext.panel.Panel',{
        width:200,
        height:150,
        title:'第一个面板实例',
        collapsible: true,
        renderTo: Ext.getBody(),
        tbar: myTopToolbar,
        bbar: myBottonToolbar,
        html: '我的第一个面板！',
        buttonAlign: 'left',
        buttons: [
            {
                handler: myBtnHander,
                text: '点我'
            }
        ],
        tools: [
            {
                type: 'gear',
                handler: function (evt,toolFl,panel) {
                    var toolClassNames = toolFl.className.split(' ');
                    var toolClass = toolClassNames[1];
                    var toolId = toolClass.split('-')[2];

                    Ext.MessageBox.alert('你点击的是','Tool' + toolId)
                    
                }
            },
            {
                type: 'help',
                handler: function () {
                    Ext.MessageBox.alert('你点击的是','帮助工具');
                }
            }
        ]
    });


    // 左右上下按钮停靠

    var buttons = [
        {text : 'Btn 1'},
        {text : 'Btn 2'},
        {text : 'Btn 3'}
    ];

    var topDockTollbar = {
        xtype: 'toolbar',
        dock: 'top',
        items: buttons
    };


    var bottomDockTollbar = {
        xtype: 'toolbar',
        dock: 'bottom',
        items: buttons
    };


    var leftDockTollbar = {
        xtype: 'toolbar',
        dock: 'left',
        items: buttons
    };

    var rightDockTollbar = {
        xtype: 'toolbar',
        dock: 'right',
        items: buttons
    };


    var myPanel = Ext.create('Ext.panel.Panel',{
        width: 350,
        height: 250,
        title: ' Ext panel rock!',
        renderTo: Ext.getBody(),
        html: '主体内容',
        vertical: true,
        // buttons : {
        //     items: buttons
        // },
        dockedItems: [
            topDockTollbar,
            bottomDockTollbar,
            leftDockTollbar,
            rightDockTollbar
        ]
    });
});