import t from 'libtap';

import {window, Event} from './_init-fake-window.js';
import {promptInstallWait, promptInstallShow} from '@cfware/before-install-prompt';

t.type(promptInstallWait, 'function');
t.type(promptInstallShow, 'function');

let ready = false;
promptInstallWait(() => {
    ready = true;
});

promptInstallShow();

const eventBeforeInstall = new Event('beforeinstallprompt');
window.dispatchEvent(eventBeforeInstall);

t.equal(ready, true);
t.equal(eventBeforeInstall.defaultPrevented, 1);
t.equal(eventBeforeInstall.prompted, 0);

promptInstallShow();
t.equal(eventBeforeInstall.prompted, 1);

ready = false;

let unexpected = false;
promptInstallWait(() => {
    unexpected = true;
});
window.dispatchEvent(new Event('beforeinstallprompt'));
t.equal(ready, false);

let immediate = false;
promptInstallWait(() => {
    immediate = true;
});
t.equal(unexpected, false);
t.equal(immediate, true);
