var $ = window.jQuery || window.Zepto || require('jquery');
module.exports = {
    walk: function(parent, force) {
        parent = parent || document;
        var $blocks = $(parent).find('[data-from]');
        // walk each data-from block
        $blocks.each(function(index, one) {
            var value = $(this).data('from');
            // walk each link
            $(one).find('a').each(function(_index, _link) {
                walkSingleLink(_link, value, force);
            });
        });
    }
};

function walkSingleLink(link, fromVal, force) {
    var originalSearch = link.search;
    if (!originalSearch) {
        link.search += '?from=' + fromVal;
    } else {
        var hasFrom = /(from=\S+)/.test(link.search);
        // replace the from value if forced
        if (hasFrom && force) {
            link.search.replace(/(from=\S+)/, 'from=' + fromVal)
        } else { // just add it
            link.search += '&from=' + fromVal;
        }
    }
}