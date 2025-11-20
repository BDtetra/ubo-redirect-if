redirect-if.js text/javascript
(function() {
    'use strict';

    function redirectIf(match, replacement) {
        const url = window.location.href;
        if (url.includes(match)) {
            window.location.replace(replacement);
        }
    }

    return redirectIf;
})();
