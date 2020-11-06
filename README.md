# @cfware/before-install-prompt [![NPM Version][npm-image]][npm-url]

Basic module to handle the `beforeinstallprompt` window event.

## Usage

```js
import {promptInstallWait, promptInstallShow} from '@cfware/before-install-prompt';

function readyToShowPrompt() {
  /* This function should display a button on the page which will call
   * promptInstallShow(); when clicked.
   */
  promptInstallShow();
}

promptInstallWait(readyToShowPrompt);
```

### promptInstallWait(callback)

Register a function to be called when `promptInstallShow` is able to show a prompt.

### promptInstallShow()

Show the install prompt if possible.  This function will silently fail if it's not
possible to show the prompt.

[npm-image]: https://img.shields.io/npm/v/@cfware/before-install-prompt.svg
[npm-url]: https://npmjs.org/package/@cfware/before-install-prompt
