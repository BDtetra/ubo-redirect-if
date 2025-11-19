redirect-if.js text/javascript
// redirect-if scriptlet for uBlock Origin
// Arguments: pattern (regex string), targetFunction (JS code string)

// redirect-if scriptlet for uBlock Origin
(function() => {
    'use strict';

    // Register the scriptlet so uBO can use it by name
    self.redirectIf = function(pattern, replacement) {
        try {
            const regex = new RegExp(pattern);
            const url = window.location.href;

            const match = url.match(regex);
            if (!match) return;

            const newUrl = url.replace(regex, replacement);

            // Prevent infinite reload loops
            if (newUrl !== url) {
                window.location.replace(newUrl);
            }
        } catch (e) {
            console.error('redirect-if scriptlet error:', e);
        }
    };

})();
