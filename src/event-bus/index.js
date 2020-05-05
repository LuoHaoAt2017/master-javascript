class EventBus {
    constructor() {
        this.box = new Map();
        this.counter = 0;
        return this;
    }

    on(event, handler) {
        if (!this.box.has(event)) {
            this.box.set(event, []);
        }
        this.box.get(event).push(handler);
        return this;
    }

    once(event, handler) {
        const warpper = (...args) => {
            handler(...args);
            this.off(event, handler);
        }
        this.on(event, warpper);
        return this;
    }

    off(event, handler) {
        if (this.box.has(event)) {
            const cbs = this.box.get(event);
            const index = cbs.indexOf(handler);
            index > -1 && cbs.splice(index, 1);
        }
        return this;
    }

    emit(event, ...args) {
        if (this.box.has(event)) {
            this.box.get(event).forEach(cb => {
                cb(...args);
            });
        }
        return this;
    }
}