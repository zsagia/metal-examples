/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Modal.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Modal.
 * @public
 */

goog.module('Modal.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'class', 'modal');
    ie_open('div', null, null,
        'class', 'modal-dialog');
      ie_open('div', null, null,
          'class', 'modal-content');
        ie_open('header', null, null,
            'class', 'modal-header');
          ie_open('button', null, null,
              'type', 'button',
              'class', 'close',
              'data-onclick', 'hide');
            ie_open('span');
              itext('\u00D7');
            ie_close('span');
          ie_close('button');
          ie_open('h4');
            itext((goog.asserts.assert((($$temp = opt_data.header) == null ? '' : $$temp) != null), ($$temp = opt_data.header) == null ? '' : $$temp));
          ie_close('h4');
        ie_close('header');
        ie_open('section', null, null,
            'class', 'modal-body');
          itext((goog.asserts.assert((($$temp = opt_data.body) == null ? '' : $$temp) != null), ($$temp = opt_data.body) == null ? '' : $$temp));
        ie_close('section');
        ie_open('footer', null, null,
            'class', 'modal-footer');
          if (opt_data.footerButtons) {
            var buttonList15 = opt_data.footerButtons;
            var buttonListLen15 = buttonList15.length;
            for (var buttonIndex15 = 0; buttonIndex15 < buttonListLen15; buttonIndex15++) {
              var buttonData15 = buttonList15[buttonIndex15];
              ie_open('button', null, null,
                  'type', 'button',
                  'class', ($$temp = buttonData15['class']) == null ? '' : $$temp);
                itext((goog.asserts.assert((($$temp = buttonData15.label) == null ? '' : $$temp) != null), ($$temp = buttonData15.label) == null ? '' : $$temp));
              ie_close('button');
            }
          }
        ie_close('footer');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Modal.render';
}

exports.render.params = ["body","footerButtons","header"];
exports.render.types = {"body":"any","footerButtons":"any","header":"any"};
templates = exports;
return exports;

});

class Modal extends Component {}
Soy.register(Modal, templates);
export { Modal, templates };
export default templates;
/* jshint ignore:end */
