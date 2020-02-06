class EventTarget {
	constructor() {
		this.listener = null;
	}

	addEventListener(type, callback) {
		this.listener = callback;
	}

	dispatchEvent(event) {
		this.listener(event);
	}
}

export class Event {
	defaultPrevented = 0;
	prompted = 0;

	constructor(type) {
		this.type = type;
	}

	preventDefault() {
		this.defaultPrevented++;
	}

	prompt() {
		this.prompted++;
	}
}

Object.assign(global, {
	window: new EventTarget(),
	EventTarget,
	Event
});

export const {window} = global;
