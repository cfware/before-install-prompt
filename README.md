# @cfware/before-install-prompt [![NPM Version][npm-image]][npm-url]

Basic module to handle the `beforeinstallprompt` event.

## Usage

```js
import beforeInstallPrompt from '@cfware/before-install-prompt';

function readyToShowPrompt() {
  /* This function should display a button on the page which will call
   * beforeInstallPrompt.prompt(); when clicked.
   */
}

if (beforeInstallPrompt.shouldListen) {
  beforeInstallPrompt.addEventListener('ready', readyToShowPrompt);
} else if (beforeInstallPrompt.canPrompt) {
  readyToShowPrompt();
}
```

### beforeInstallPrompt.shouldListen

Readonly property is true if `beforeinstallprompt` event has not yet occurred.

### beforeInstallPrompt.promptShown

Readonly property is true when the prompt has been shown.

### beforeInstallPrompt.canPrompt

Readonly property is true when the `beforeinstallprompt` event has occurred but
the prompt has not yet been shown.

### beforeInstallPrompt.prompt()

This function will show the install prompt if possible.  This function has no
effect if `beforeinstallprompt` hasn't been dispatched yet.

[npm-image]: https://img.shields.io/npm/v/@cfware/before-install-prompt.svg
[npm-url]: https://npmjs.org/package/@cfware/before-install-prompt
