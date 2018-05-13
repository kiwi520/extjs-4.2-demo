Ext.data.JsonP.Ext_String({"alternateClassNames":[],"aliases":{},"enum":null,"parentMixins":[],"tagname":"class","subclasses":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/String2.html#Ext-String' target='_blank'>String.js</a></div></pre><div class='doc-contents'><p>A collection of useful static methods to deal with strings.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addCharacterEntities' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-addCharacterEntities' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-addCharacterEntities' class='name expandable'>addCharacterEntities</a>( <span class='pre'>entities</span> )</div><div class='description'><div class='short'>Adds a set of character entity definitions to the set used by\nhtmlEncode and htmlDecode. ...</div><div class='long'><p>Adds a set of character entity definitions to the set used by\n<a href=\"#!/api/Ext.String-method-htmlEncode\" rel=\"Ext.String-method-htmlEncode\" class=\"docClass\">htmlEncode</a> and <a href=\"#!/api/Ext.String-method-htmlDecode\" rel=\"Ext.String-method-htmlDecode\" class=\"docClass\">htmlDecode</a>.</p>\n\n<p>This object should be keyed by the entity name sequence,\nwith the value being the textual representation of the entity.</p>\n\n<pre><code> <a href=\"#!/api/Ext.String-method-addCharacterEntities\" rel=\"Ext.String-method-addCharacterEntities\" class=\"docClass\">Ext.String.addCharacterEntities</a>({\n     '&amp;amp;Uuml;':'Ü',\n     '&amp;amp;ccedil;':'ç',\n     '&amp;amp;ntilde;':'ñ',\n     '&amp;amp;egrave;':'è'\n });\n var s = <a href=\"#!/api/Ext.String-method-htmlEncode\" rel=\"Ext.String-method-htmlEncode\" class=\"docClass\">Ext.String.htmlEncode</a>(\"A string with entities: èÜçñ\");\n</code></pre>\n\n<p><strong>Note:</strong> the values of the character entities defined on this object are expected\nto be single character values.  As such, the actual values represented by the\ncharacters are sensitive to the character encoding of the JavaScript source\nfile when defined in string literal form. Script tags referencing server\nresources with character entities must ensure that the 'charset' attribute\nof the script node is consistent with the actual character encoding of the\nserver resource.</p>\n\n<p>The set of character entities may be reset back to the default state by using\nthe <a href=\"#!/api/Ext.String-method-resetCharacterEntities\" rel=\"Ext.String-method-resetCharacterEntities\" class=\"docClass\">resetCharacterEntities</a> method</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>entities</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The set of character entities to add to the current\ndefinitions.</p>\n</div></li></ul></div></div></div><div id='method-capitalize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-capitalize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-capitalize' class='name expandable'>capitalize</a>( <span class='pre'>string</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Capitalize the given string ...</div><div class='long'><p>Capitalize the given string</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createVarName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-createVarName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-createVarName' class='name expandable'>createVarName</a>( <span class='pre'>s</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Converts a string of characters into a legal, parse-able JavaScript var name as long as the passed\nstring contains at...</div><div class='long'><p>Converts a string of characters into a legal, parse-able JavaScript <code>var</code> name as long as the passed\nstring contains at least one alphabetic character. Non alphanumeric characters, and <em>leading</em> non alphabetic\ncharacters will be removed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>A string to be converted into a <code>var</code> name.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>A legal JavaScript <code>var</code> name.</p>\n</div></li></ul></div></div></div><div id='method-ellipsis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-ellipsis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-ellipsis' class='name expandable'>ellipsis</a>( <span class='pre'>value, length, [word]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length. ...</div><div class='long'><p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The string to truncate.</p>\n</div></li><li><span class='pre'>length</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The maximum length to allow before truncating.</p>\n</div></li><li><span class='pre'>word</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p><code>true</code> to try to find a common word break.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The converted text.</p>\n</div></li></ul></div></div></div><div id='method-endsWith' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-endsWith' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-endsWith' class='name expandable'>endsWith</a>( <span class='pre'>s, start, [ignoreCase]</span> )</div><div class='description'><div class='short'>Checks if a string ends with a substring ...</div><div class='long'><p>Checks if a string ends with a substring</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The original string</p>\n</div></li><li><span class='pre'>start</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The substring to check</p>\n</div></li><li><span class='pre'>ignoreCase</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>True to ignore the case in the comparison</p>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></div></div><div id='method-escape' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-escape' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-escape' class='name expandable'>escape</a>( <span class='pre'>string</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Escapes the passed string for ' and \\ ...</div><div class='long'><p>Escapes the passed string for ' and \\</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The string to escape</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The escaped string</p>\n</div></li></ul></div></div></div><div id='method-escapeRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-escapeRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-escapeRegex' class='name expandable'>escapeRegex</a>( <span class='pre'>string</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Escapes the passed string for use in a regular expression. ...</div><div class='long'><p>Escapes the passed string for use in a regular expression.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-format' class='name expandable'>format</a>( <span class='pre'>string, values</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens. ...</div><div class='long'><p>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each\ntoken must be unique, and must increment in the format {0}, {1}, etc.  Example usage:</p>\n\n<pre><code>var cls = 'my-class',\n    text = 'Some text';\nvar s = <a href=\"#!/api/Ext.String-method-format\" rel=\"Ext.String-method-format\" class=\"docClass\">Ext.String.format</a>('&lt;div class=\"{0}\"&gt;{1}&lt;/div&gt;', cls, text);\n// s now contains the string: '&lt;div class=\"my-class\"&gt;Some text&lt;/div&gt;'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The tokenized string to be formatted.</p>\n</div></li><li><span class='pre'>values</span> : Mixed...<div class='sub-desc'><p>The values to replace tokens <code>{0}</code>, <code>{1}</code>, etc in order.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The formatted string.</p>\n</div></li></ul></div></div></div><div id='method-hasHtmlCharacters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-hasHtmlCharacters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-hasHtmlCharacters' class='name expandable'>hasHtmlCharacters</a>( <span class='pre'>The</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Checks if a string has values needing to be html encoded. ...</div><div class='long'><p>Checks if a string has values needing to be html encoded.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>string to test</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p><code>true</code> if the string contains HTML characters</p>\n</div></li></ul></div></div></div><div id='method-htmlDecode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-htmlDecode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-htmlDecode' class='name expandable'>htmlDecode</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Convert certain characters (&amp;, &lt;, >, ', and \") from their HTML character equivalents. ...</div><div class='long'><p>Convert certain characters (&amp;, &lt;, >, ', and \") from their HTML character equivalents.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The string to decode.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The decoded text.</p>\n</div></li></ul></div></div></div><div id='method-htmlEncode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-htmlEncode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-htmlEncode' class='name expandable'>htmlEncode</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Convert certain characters (&amp;, &lt;, >, ', and \") to their HTML character equivalents for literal display in web ...</div><div class='long'><p>Convert certain characters (&amp;, &lt;, >, ', and \") to their HTML character equivalents for literal display in web pages.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The string to encode.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The encoded text.</p>\n</div></li></ul></div></div></div><div id='method-insert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-insert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-insert' class='name expandable'>insert</a>( <span class='pre'>s, value, index</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Inserts a substring into a string. ...</div><div class='long'><p>Inserts a substring into a string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The original string.</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The substring to insert.</p>\n</div></li><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index to insert the substring. Negative indexes will insert from the end of\nthe string. Example:</p>\n\n<pre><code><a href=\"#!/api/Ext.String-method-insert\" rel=\"Ext.String-method-insert\" class=\"docClass\">Ext.String.insert</a>(\"abcdefg\", \"h\", -1); // abcdefhg\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The value with the inserted substring</p>\n</div></li></ul></div></div></div><div id='method-leftPad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-leftPad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-leftPad' class='name expandable'>leftPad</a>( <span class='pre'>string, size, [character]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Pads the left side of a string with a specified character. ...</div><div class='long'><p>Pads the left side of a string with a specified character.  This is especially useful\nfor normalizing number and date strings.  Example usage:</p>\n\n<pre><code>var s = <a href=\"#!/api/Ext.String-method-leftPad\" rel=\"Ext.String-method-leftPad\" class=\"docClass\">Ext.String.leftPad</a>('123', 5, '0');\n// s now contains the string: '00123'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The original string.</p>\n</div></li><li><span class='pre'>size</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The total length of the output string.</p>\n</div></li><li><span class='pre'>character</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The character with which to pad the original string.</p>\n<p>Defaults to: <code>' '</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The padded string.</p>\n</div></li></ul></div></div></div><div id='method-repeat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-repeat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-repeat' class='name expandable'>repeat</a>( <span class='pre'>pattern, count, sep</span> )</div><div class='description'><div class='short'>Returns a string with a specified number of repetitions a given string pattern. ...</div><div class='long'><p>Returns a string with a specified number of repetitions a given string pattern.\nThe pattern be separated by a different string.</p>\n\n<pre><code> var s = <a href=\"#!/api/Ext.String-method-repeat\" rel=\"Ext.String-method-repeat\" class=\"docClass\">Ext.String.repeat</a>('---', 4); // = '------------'\n var t = <a href=\"#!/api/Ext.String-method-repeat\" rel=\"Ext.String-method-repeat\" class=\"docClass\">Ext.String.repeat</a>('--', 3, '/'); // = '--/--/--'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pattern</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The pattern to repeat.</p>\n</div></li><li><span class='pre'>count</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The number of times to repeat the pattern (may be 0).</p>\n</div></li><li><span class='pre'>sep</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>An option string to separate each pattern.</p>\n</div></li></ul></div></div></div><div id='method-resetCharacterEntities' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-resetCharacterEntities' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-resetCharacterEntities' class='name expandable'>resetCharacterEntities</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Resets the set of character entity definitions used by\nhtmlEncode and htmlDecode back to the\ndefault state. ...</div><div class='long'><p>Resets the set of character entity definitions used by\n<a href=\"#!/api/Ext.String-method-htmlEncode\" rel=\"Ext.String-method-htmlEncode\" class=\"docClass\">htmlEncode</a> and <a href=\"#!/api/Ext.String-method-htmlDecode\" rel=\"Ext.String-method-htmlDecode\" class=\"docClass\">htmlDecode</a> back to the\ndefault state.</p>\n</div></div></div><div id='method-splitWords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-splitWords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-splitWords' class='name expandable'>splitWords</a>( <span class='pre'>words</span> )</div><div class='description'><div class='short'>Splits a string of space separated words into an array, trimming as needed. ...</div><div class='long'><p>Splits a string of space separated words into an array, trimming as needed. If the\nwords are already an array, it is returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>words</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-startsWith' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-startsWith' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-startsWith' class='name expandable'>startsWith</a>( <span class='pre'>s, start, [ignoreCase]</span> )</div><div class='description'><div class='short'>Checks if a string starts with a substring ...</div><div class='long'><p>Checks if a string starts with a substring</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The original string</p>\n</div></li><li><span class='pre'>start</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The substring to check</p>\n</div></li><li><span class='pre'>ignoreCase</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>True to ignore the case in the comparison</p>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></div></div><div id='method-toggle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-toggle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-toggle' class='name expandable'>toggle</a>( <span class='pre'>string, value, other</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Utility function that allows you to easily switch a string between two alternating values. ...</div><div class='long'><p>Utility function that allows you to easily switch a string between two alternating values.  The passed value\nis compared to the current string, and if they are equal, the other value that was passed in is returned.  If\nthey are already different, the first value passed in is returned.  Note that this method returns the new value\nbut does not change the current string.</p>\n\n<pre><code>// alternate sort directions\nsort = <a href=\"#!/api/Ext.String-method-toggle\" rel=\"Ext.String-method-toggle\" class=\"docClass\">Ext.String.toggle</a>(sort, 'ASC', 'DESC');\n\n// instead of conditional logic:\nsort = (sort === 'ASC' ? 'DESC' : 'ASC');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The current string.</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value to compare to the current string.</p>\n</div></li><li><span class='pre'>other</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The new value to use if the string already equals the first value passed in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-trim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-trim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-trim' class='name expandable'>trim</a>( <span class='pre'>string</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Trims whitespace from either end of a string, leaving spaces within the string intact. ...</div><div class='long'><p>Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:</p>\n\n<pre><code>var s = '  foo bar  ';\nalert('-' + s + '-');                   //alerts \"- foo bar -\"\nalert('-' + <a href=\"#!/api/Ext.String-method-trim\" rel=\"Ext.String-method-trim\" class=\"docClass\">Ext.String.trim</a>(s) + '-');  //alerts \"-foo bar-\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The string to trim.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The trimmed string.</p>\n</div></li></ul></div></div></div><div id='method-uncapitalize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-uncapitalize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-uncapitalize' class='name expandable'>uncapitalize</a>( <span class='pre'>string</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Uncapitalize the given string. ...</div><div class='long'><p>Uncapitalize the given string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-urlAppend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String2.html#Ext-String-method-urlAppend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-urlAppend' class='name expandable'>urlAppend</a>( <span class='pre'>url, string</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand. ...</div><div class='long'><p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The URL to append to.</p>\n</div></li><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The content to append to the URL.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The resulting URL</p>\n</div></li></ul></div></div></div></div></div></div></div>","superclasses":[],"meta":{},"requires":[],"html_meta":{},"statics":{"property":[],"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"String2.html#Ext-String","filename":"String.js"}],"linenr":5,"members":{"property":[],"cfg":[],"css_var":[],"method":[{"tagname":"method","owner":"Ext.String","meta":{},"name":"addCharacterEntities","id":"method-addCharacterEntities"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"capitalize","id":"method-capitalize"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"createVarName","id":"method-createVarName"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"ellipsis","id":"method-ellipsis"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"endsWith","id":"method-endsWith"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"escape","id":"method-escape"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"escapeRegex","id":"method-escapeRegex"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"format","id":"method-format"},{"tagname":"method","owner":"Ext.String","meta":{"private":true},"name":"hasHtmlCharacters","id":"method-hasHtmlCharacters"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"htmlDecode","id":"method-htmlDecode"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"htmlEncode","id":"method-htmlEncode"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"insert","id":"method-insert"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"leftPad","id":"method-leftPad"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"repeat","id":"method-repeat"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"resetCharacterEntities","id":"method-resetCharacterEntities"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"splitWords","id":"method-splitWords"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"startsWith","id":"method-startsWith"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"toggle","id":"method-toggle"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"trim","id":"method-trim"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"uncapitalize","id":"method-uncapitalize"},{"tagname":"method","owner":"Ext.String","meta":{},"name":"urlAppend","id":"method-urlAppend"}],"event":[],"css_mixin":[]},"inheritable":null,"private":null,"component":false,"name":"Ext.String","singleton":true,"override":null,"inheritdoc":null,"id":"class-Ext.String","mixins":[],"mixedInto":[]});