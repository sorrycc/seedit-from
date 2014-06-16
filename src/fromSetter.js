var $ = window.jQuery || window.Zepto || require('jquery');
module.exports = {
    walk: function (parent, force) {
        parent = parent || document;
        var $blocks = $(parent).find('[data-from]');
        console.log($blocks);
        // walk each data-from block
        $blocks.each(function (index, one) {
            var $this = $(one);
            var value = $(this).data('from');
            var $links;
            if ($this.is('a')) {
                $links = $this;
            } else {
                $links = $this.find('a');
            }
            console.log($(one))
            // set index when is a ul element
            if ($(one).attr('data-from-index') === 'true' && $(one).is('ul')) {
                console.log('true');
                $(one).find('li').each(function (_index, _one) {
                    $(_one).find('a').attr('data-from-index', _index + 1);
                });
            }

            // walk each link
            $links.each(function (_index, _link) {
                walkSingleLink(_link, value, force);
            });
        });
    }
};

function walkSingleLink(link, fromVal, force) {
    var href = $(link).attr('href');
    // no links, no search value appended.
    if (href === '#' || /^javascript/.test(href)) {
        return;
    }

    var index = $(link).attr('data-from-index');
    if (index) {
        fromVal += '_' + index;
    }

    var originalSearch = link.search;
    if (!originalSearch) {
        link.search += '?from=' + fromVal;
    } else {
        var hasFrom = /(from=\S+)/.test(link.search);
        // replace the from value if forced
        if (hasFrom && force) {
            link.search = link.search.replace(/(from=\S+)/, 'from=' + fromVal);
        } else { // just add it
            link.search += '&from=' + fromVal;
        }
    }
}