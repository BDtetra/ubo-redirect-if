redirect-if.js text/javascript
// redirect-if scriptlet for uBlock Origin
// Arguments: pattern (regex string), targetFunction (JS code string)

(function() {
    function redirectIf(pattern, fnBody) {
        let re = new RegExp(pattern);
        let m = re.exec(location.href);
        if (m) {
            // create function so the filter can pass in code
            let fn = new Function('match', fnBody);
            fn(m);
        }
    }

    // Expose this scriptlet name to uBO
    return redirectIf;
})();
