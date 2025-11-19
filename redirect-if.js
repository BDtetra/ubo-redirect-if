redirect-if.js text/javascript
// redirect-if scriptlet for uBlock Origin
// Arguments: pattern (regex string), targetFunction (JS code string)

// redirect-if scriptlet for uBlock Origin
(function() {
    'use strict';

    // The function returned by this IIFE becomes the scriptlet implementation.
    return function(pattern, replacementTemplate) {
        try {
            if (!pattern || !replacementTemplate) return;

            // pattern is passed as a string from the filter, create RegExp
            var re = new RegExp(pattern);
            var url = window.location.href;
            var match = url.match(re);
            if (!match) return;

            // Replace $1, $2, ... in the replacementTemplate with the capture groups
            var newUrl = replacementTemplate.replace(/\$([0-9]+)/g, function(_, n) {
                return typeof match[Number(n)] !== 'undefined' ? match[Number(n)] : '';
            });

            // If replacementTemplate doesn't produce an absolute URL, you may get a bad URL.
            // It's safest to pass a full absolute URL in the filter (see examples below).
            if (!newUrl || newUrl === url) return;

            // Redirect (use replace so it doesn't create an extra history entry)
            window.location.replace(newUrl);
        } catch (err) {
            console.error('redirect-if scriptlet error:', err);
        }
    };
})();
