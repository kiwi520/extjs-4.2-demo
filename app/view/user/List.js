Ext.define('kiwi.view.user.List',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    title: ' I you ok ?',

    initCompoent: function () {
        this.store = {
            fields:['name','email'],
            data: [
                {name:'ok',email:'ok@1.com'},
                {name:'two',email:'two@1.com'}
            ]
        };

        this.columns = [
            {header:'Name',dataIndex:'name',flex:1},
            {header:'Email',dataIndex:'email',flex:1}
        ];

        this.callParent(arguments);
    }
});