Ext.QuickTips.init();
var fpItems = [
    {
        fieldLabel: 'Alpha only',
        allowBlank: false,
        emptyText:'This field is empty!',
        maskRe: /[a-z]/i,
        msgTarget: 'side'
    },
    {
        fieldLabel: ' 3 到 7 个字符',
        allowBlank: false,
        emptyText:'under',
        minLength: 3,
        maxLength: 8
    },
    {
        fieldLabel: '只能输入字符串',
        msgTarget: 'qtip',
        stripCharsRe: /[a-zA-Z0-9]/ig
    },
    {
        fieldLabel:'只能输入url',
        vtype: 'url',
        msgTarget: 'side'
    }
];


Ext.onReady(function () {
    var fp = Ext.create('Ext.form.Panel', {
            renderTo: Ext.getBody() ,
            width: 400,
            height:240,
            title: '表单验证实例',
            frame: true,
            bodyStyle: 'padding: 6px',
            labelWidth: 126,
            defaultType: 'textfield',
            defaults: {
                msgTarget:'side',
                anchor: '-20'
            },
            items: fpItems

    });



});