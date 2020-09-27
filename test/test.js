import t from 'libtap';

import {window, Event} from './_init-fake-window.js';
import beforeInstallPrompt from '@cfware/before-install-prompt';

t.test('lifecycle', async t => {
	t.type(beforeInstallPrompt, 'object');
	t.equal(beforeInstallPrompt.canPrompt, false);
	t.equal(beforeInstallPrompt.promptShown, false);
	t.equal(beforeInstallPrompt.shouldListen, true);

	let ready = false;
	beforeInstallPrompt.addEventListener('ready', () => {
		ready = true;
	});

	beforeInstallPrompt.prompt();
	t.equal(beforeInstallPrompt.canPrompt, false);
	t.equal(beforeInstallPrompt.promptShown, false);
	t.equal(beforeInstallPrompt.shouldListen, true);
	t.equal(ready, false);

	const eventBeforeInstall = new Event('beforeinstallprompt');
	window.dispatchEvent(eventBeforeInstall);

	t.equal(ready, true);
	t.equal(eventBeforeInstall.defaultPrevented, 1);
	t.equal(eventBeforeInstall.prompted, 0);
	t.equal(beforeInstallPrompt.canPrompt, true);
	t.equal(beforeInstallPrompt.promptShown, false);
	t.equal(beforeInstallPrompt.shouldListen, false);

	beforeInstallPrompt.prompt();
	t.equal(beforeInstallPrompt.canPrompt, false);
	t.equal(beforeInstallPrompt.promptShown, true);
	t.equal(eventBeforeInstall.prompted, 1);
});
