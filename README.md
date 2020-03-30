# @cfware/before-install-prompt

![Tests][tests-status]
[![Greenkeeper badge][gk-image]](https://greenkeeper.io/)
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![MIT][license-image]](LICENSE)

Basic module to handle the `beforeinstallprompt` event.

### Install @cfware/before-install-prompt

Testing this module requires node.js 13.7.0 or above.

```sh
npm i --save @cfware/before-install-prompt
```

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
[tests-status]: https://github.com/cfware/before-install-prompt/workflows/Tests/badge.svg
[gk-image]: https://badges.greenkeeper.io/cfware/before-install-prompt.svg
[downloads-image]: https://img.shields.io/npm/dm/@cfware/before-install-prompt.svg
[downloads-url]: https://npmjs.org/package/@cfware/before-install-prompt
[license-image]: https://img.shields.io/npm/l/@cfware/before-install-prompt.svg
