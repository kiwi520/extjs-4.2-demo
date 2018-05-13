/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-09-18 17:18:59 (940c324ac822b840618a3a8b2b4b873f83a1a9b1)
*/
Ext.define('Ext.rtl.tip.QuickTipManager', {
    override: 'Ext.tip.QuickTipManager',

    init: function() {
        var me = this;

        // Will return false if not ready to proceed
        if (me.callParent(arguments) !== false) {
            me.tip.on('beforeshow', me.onBeforeFirstShow, me, { single: true });
        }
    },

    onBeforeFirstShow: function(tip) {
        // The rtl override for AbstractComponent reads the DOM for floating components to
        // determine if their local coordinate system is RTL and caches the value.  If
        // QuickTipManager.init() is called before the Viewport has been rendered then the
        // cached value may be incorrect.  Clear the cached value so that the next call to
        // isLocalRtl() will read the DOM again. 
        tip._isOffsetParentRtl = undefined;
    }
});