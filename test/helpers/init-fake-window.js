let listener = null;
const global = new Function('return this')(); // eslint-disable-line no-new-func
global.window = {
	addEventListener(type, cb) {
		listener = cb;
	}
};

export function createEvent() {
	return {
		defaultPrevented: 0,
		prompted: 0,
		preventDefault() {
			this.defaultPrevented++;
		},
		prompt() {
			this.prompted++;
		}
	};
}

export function dispatch(event) {
	listener(event);
}
