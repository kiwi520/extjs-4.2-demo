Ext.onReady(function () {
   var myCallback = function(btn,text){
       console.info('You pressed' + btn);
       if(text){
           console.info('You entered :' + text)
       }
   }

   // 普通提示框
   var msg = 'Your docuemt was saved successful';
   var title = 'Save status';
   Ext.MessageBox.alert(title,msg);


   // 带输入的提示框
    var msg = 'Please enter you email address！';
    var title = 'Input Required';
    Ext.MessageBox.prompt(title,msg,myCallback);

});