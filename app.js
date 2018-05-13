Ext.define("kiwi.Person",{
    config:{
        Name:'',
        Age:0,
    },
    Say:function (msg) {
        console.log(this.Name+ "Says:",msg);
    },
    constructor: function (config) {
        this.initConfig(config)
    }
});

Ext.define("kiwi.Developer",{
    extend:'kiwi.Person',
    alias:'Developer',
    Coding:function (code) {
        console.log(this.Name + "正在编码",code);
    },
    constructor:function () {
        this.callParent(arguments);
    }
});

var win = Ext.create("Ext.window.Window",{
   title:'示例窗口',
    width:300,
    height:200,
});

Ext.application({
    requires:'Ext.container.Viewport',
    name:'kiwi',
    appFolder: 'app',
    contollers:[
        'Users'
    ],
    launch: function () {
        var Tom = Ext.create('Developer',{
            Name:'liyan',
            Age:26
        });
        Tom.Say("Hello");
        Tom.Coding("int num =0;");
        win.show();

    }

});

