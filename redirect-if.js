redirect-if.js test/javascript
(function() {
    'use strict';

    function redirectIf(pattern, replacementTemplate) {
        const url = window.location.href;
        const regex = new RegExp(pattern);

        const match = url.match(regex);
        if (!match) return;

        const newUrl = replacementTemplate.replace(/\$([0-9]+)/g, (x, n) => match[n] || '');
        if (!newUrl || newUrl === url) return;

        window.location.replace(newUrl);
    }

    return redirectIf;
})();
