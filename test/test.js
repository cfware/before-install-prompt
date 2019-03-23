import test from 'ava';
import delay from 'delay';

import {dispatch, createEvent} from './helpers/init-fake-window';
import {watch, showPrompt} from '..';

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

	await delay(0);
	t.is(watch2Called, 1);

	t.notThrows(showPrompt);
	t.is(event.defaultPrevented, 1);
	t.is(event.prompted, 1);
	t.is(watch1Called, 1);
	t.is(watch2Called, 1);

	watch(() => {
		watch3Called++;
	});

	await delay(0);
	t.is(watch3Called, 0);
});
