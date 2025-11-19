// redirect-if.js — Custom scriptlet for uBlock Origin
(function() {
    'use strict';

    // uBlock will call the returned function when the scriptlet is invoked
    return function(pattern, replacementTemplate) {
        try {
            if (!pattern || !replacementTemplate) return;

            const url = window.location.href;
            const regex = new RegExp(pattern);
            const match = url.match(regex);
            if (!match) return;

            // Replace $1, $2, etc with regex capture groups
            const newUrl = replacementTemplate.replace(/\$([0-9]+)/g, (x, n) => {
                return match[n] || "";
            });

            // Avoid infinite loop
            if (!newUrl || newUrl === url) return;

            // Redirect (replace so it doesn't create a new history entry)
            window.location.replace(newUrl);

        } catch (err) {
            console.error("redirect-if.js error:", err);
        }
    };
})();
