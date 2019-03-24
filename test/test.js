import test from 'ava';

import {window, Event} from './helpers/init-fake-window';
import beforeInstallPrompt from '..';

test('lifecycle', t => {
	t.is(typeof beforeInstallPrompt, 'object');
	t.false(beforeInstallPrompt.canPrompt);
	t.false(beforeInstallPrompt.promptShown);
	t.true(beforeInstallPrompt.shouldListen);

	let ready = false;
	beforeInstallPrompt.addEventListener('ready', () => {
		ready = true;
	});

	beforeInstallPrompt.prompt();
	t.false(beforeInstallPrompt.canPrompt);
	t.false(beforeInstallPrompt.promptShown);
	t.true(beforeInstallPrompt.shouldListen);
	t.false(ready);

	const eventBeforeInstall = new Event('beforeinstallprompt');
	window.dispatchEvent(eventBeforeInstall);

	t.true(ready);
	t.is(eventBeforeInstall.defaultPrevented, 1);
	t.is(eventBeforeInstall.prompted, 0);
	t.true(beforeInstallPrompt.canPrompt);
	t.false(beforeInstallPrompt.promptShown);
	t.false(beforeInstallPrompt.shouldListen);

	beforeInstallPrompt.prompt();
	t.false(beforeInstallPrompt.canPrompt);
	t.true(beforeInstallPrompt.promptShown);
	t.is(eventBeforeInstall.prompted, 1);
});
