/**
 * LotusIcons v1.0.0 - Fast, caching, dynamic inline SVG DOM injection library
 * Copyright (c) 2015-2019 Lotus Studio <hello@lotus-studio.co>
 */

(function($, window, document) {
  ('use strict');

  /**
   * Recursively finds a value by key in window.LotusConfig.icons
   * @param  {String} key
   */
  function getValueByKey(key) {
    var value;
    Object.keys(window.LotusConfig.icons).some(function(k) {
      if (k === key) {
        value = window.LotusConfig.icons[k];
        return true;
      }
      if (window.LotusConfig.icons[k] && typeof window.LotusConfig.icons[k] === 'object') {
        value = window.LotusConfig.icons.getValueByKey(window.LotusConfig.icons[k], key);
        return value !== undefined;
      }
    });
    return value;
  }

  var LotusIcons = {
    // Insert all icons specified in LotusConfig.icons object
    insertIcons: function() {
      $('[data-lotus-icon]').each(function(index, el) {
        var $el = $(el);
        var id = $el.attr('data-lotus-icon');
        var imgUrl = getValueByKey(id);
        $el.attr('src', imgUrl);
      });
    }
  };

  window.LotusIcons = LotusIcons;

  $(function() {
    LotusIcons.insertIcons();
  });
})(jQuery, window, document);
