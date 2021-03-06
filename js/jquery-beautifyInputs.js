/*!
 * jquery-beautifyInputs v0.0.2 by @iekadou
 * Copyright (c) 2014 Jonas Braun
 *
 * http://www.noxic-action.de/page/programming/jquery-beautifyInputs
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
(function ($) {

    'use strict';

	$.fn.beautifyInputs = function( options ) {
        return this.each(function() {
            var data = $(this).data('beautified');
            if (!data) {
                var $el = $(this);
                $el.data('beautified', (data = true));
                var $overlay = $('<span/>').attr({
                    "class": "input-overlay",
                    "tabindex": "0"
                });
                var $checked = $('<span/>').attr({
                    "class": "checked"
                });

                $overlay.html($checked);
                $el.after($overlay);
                $overlay.on('keypress', function(e) {
                    // space on overlay to (un)check radio/checkbox
                    if (e.keyCode == 32) {
                        e.preventDefault();
                        $el.click();
                    }
                }).off('click').on('click', function(e) {
                    e.preventDefault();
                    $el.click();
                });
            }
        });
	};

}(jQuery));
