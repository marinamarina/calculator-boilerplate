// Set of dependencies
// This gives us flexibility to change dependencies with a common API e.g. Bonzo --> jQuery
define(['jquery',
        'vendor/eventEmitter'
], function (
    jquery,
    pubsub
) {
    var news = {
        $: jquery,
        pubsub: new EventEmitter()
    };

    return news;

});