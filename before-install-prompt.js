let done, deferredPrompt; // eslint-disable-line one-var
const notifyFns = [];

window.addEventListener('beforeinstallprompt', event => {
	event.preventDefault();
	deferredPrompt = event;
	done = true;
	notifyFns.forEach(fn => {
		fn();
	});
});

export const watch = fn => {
	if (!done) {
		notifyFns.push(fn);
	} else if (deferredPrompt) {
		setTimeout(fn, 0);
	}
};

export const showPrompt = () => {
	if (deferredPrompt) {
		deferredPrompt.prompt();
		deferredPrompt = null;
	}
};
