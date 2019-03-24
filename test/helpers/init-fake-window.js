class EventTarget {
	constructor() {
		this.listener = null;
	}

	addEventListener(type, cb) {
		this.listener = cb;
	}

	dispatchEvent(event) {
		this.listener(event);
	}
}

export class Event {
	constructor(type) {
		Object.assign(this, {
			type,
			defaultPrevented: 0,
			prompted: 0
		});
	}

	preventDefault() {
		this.defaultPrevented++;
	}

	prompt() {
		this.prompted++;
	}
}

const global = new Function('return this')(); // eslint-disable-line no-new-func
Object.assign(global, {
	window: new EventTarget(),
	EventTarget,
	Event
});

export const {window} = global;
