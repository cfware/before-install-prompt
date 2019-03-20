# @cfware/before-install-prompt

[![Travis CI][travis-image]][travis-url]
[![Greenkeeper badge][gk-image]](https://greenkeeper.io/)
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![MIT][license-image]](LICENSE)

Basic module to handle the `beforeinstallprompt` event.

### Install @cfware/before-install-prompt

Testing this module requires node.js 8 or above.

```sh
npm i --save @cfware/before-install-prompt
```

## Usage

```js
import {watch, showPrompt} from '@cfware/before-install-prompt';

watch(() => {
  console.log('Notification: showPrompt() can now be called');
  showPrompt();
});
```

### watch(fn)

Register a function to be called when `showPrompt()` can be effective.  The
function is called without any arguments.

### showPrompt()

Request that the browser show a prompt to install the application.  This
function has no effect if `beforeinstallprompt` hasn't been dispatched yet.

## Running tests

Tests are provided by xo and ava.

```sh
npm install
npm test
```

[npm-image]: https://img.shields.io/npm/v/@cfware/before-install-prompt.svg
[npm-url]: https://npmjs.org/package/@cfware/before-install-prompt
[travis-image]: https://travis-ci.org/cfware/before-install-prompt.svg?branch=master
[travis-url]: https://travis-ci.org/cfware/before-install-prompt
[gk-image]: https://badges.greenkeeper.io/cfware/before-install-prompt.svg
[downloads-image]: https://img.shields.io/npm/dm/@cfware/before-install-prompt.svg
[downloads-url]: https://npmjs.org/package/@cfware/before-install-prompt
[license-image]: https://img.shields.io/npm/l/@cfware/before-install-prompt.svg
