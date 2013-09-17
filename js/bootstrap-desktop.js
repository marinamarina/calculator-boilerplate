define(
['jquery-1',
 'vendor/eventEmitter'],
function (jquery, EventEmitter) {
    return {
        $: jquery,
        pubsub: new EventEmitter()
    };
});