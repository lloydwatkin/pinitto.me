define([], function() {
    if (typeof(config.analytics) == 'undefined' 
        || typeof(config.analytics.google) == 'undefined' 
        || !config.analytics.google) return;

    var _gaq=[['_setAccount',config.analytics.google],['_trackPageview']];
        (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
        s.parentNode.insertBefore(g,s)}(document,'script'));
});