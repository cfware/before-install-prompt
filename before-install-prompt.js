class BeforeInstallPrompt extends EventTarget {
	constructor() {
		super();

		window.addEventListener('beforeinstallprompt', event => {
			event.preventDefault();
			this._deferredPrompt = event;
			this.dispatchEvent(new Event('ready'));
		});
	}

	get shouldListen() {
		return !(this._promptShown || this._deferredPrompt);
	}

	get promptShown() {
		return !!this._promptShown; // eslint-disable-line no-implicit-coercion
	}

	get canPrompt() {
		return !!this._deferredPrompt; // eslint-disable-line no-implicit-coercion
	}

	prompt() {
		if (this._deferredPrompt) {
			this._promptShown = true;
			this._deferredPrompt.prompt();
			this._deferredPrompt = null;
		}
	}
}

export default new BeforeInstallPrompt();
