// ==UserScript==
// @scriptlet redirect-if
// ==/UserScript==

redirectIf = function(match, replacement) {
    return function() {
        const url = window.location.href;
        if (url.includes(match)) {
            window.location.replace(replacement);
        }
    };
};
