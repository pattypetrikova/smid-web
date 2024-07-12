import mitt from 'mitt';

/*
	Usage description:

	In place from which you want to emit an event:
	const {$event} = useNuxtApp();

	$event('eventName', data);

	In place from which you want to listen to an event:
	const {$listen} = useNuxtApp();

	$listen('eventName', (data) => {
		// do something with data
	});
*/

export default defineNuxtPlugin(() => {
	const emitter = mitt();

	return {
		provide: {
			event: emitter.emit,
			listen: emitter.on
		}
	};
});
