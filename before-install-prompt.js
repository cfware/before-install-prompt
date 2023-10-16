import callbackArrayOnce from '@cfware/callback-array-once';
import {preventDefault} from '@cfware/event-blocker';

let deferredPrompt;
const callbacks = [];

window.addEventListener('beforeinstallprompt', event => {
    preventDefault(event);
    deferredPrompt = event;
    callbackArrayOnce(callbacks);
});

export const promptInstallWait = callback => {
    if (deferredPrompt) {
        callback();
    } else if (deferredPrompt !== false) {
        callbacks.push(callback);
    }
};

export const promptInstallShow = () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt = false;
    }
};
