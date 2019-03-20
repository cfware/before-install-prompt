import test from 'ava';
import {dispatch, createEvent} from './helpers/init-fake-window';
import {watch, showPrompt} from '..';

function waitTick() {
	return new Promise(resolve => setTimeout(resolve, 0));
}

test('lifecycle', async t => {
	t.notThrows(showPrompt);
	let watch1Called = 0;
	let watch2Called = 0;
	let watch3Called = 0;
	watch(() => {
		watch1Called++;
	});
	t.is(watch1Called, 0);

	const event = createEvent();
	dispatch(event);
	watch(() => {
		watch2Called++;
	});
	t.is(watch2Called, 0);
	t.is(watch1Called, 1);
	t.is(event.defaultPrevented, 1);
	t.is(event.prompted, 0);

	await waitTick();
	t.is(watch2Called, 1);

	t.notThrows(showPrompt);
	t.is(event.defaultPrevented, 1);
	t.is(event.prompted, 1);
	t.is(watch1Called, 1);
	t.is(watch2Called, 1);

	watch(() => {
		watch3Called++;
	});

	await waitTick();
	t.is(watch3Called, 0);
});
