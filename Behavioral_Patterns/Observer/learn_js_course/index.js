const Chat = {
    persons: [],
    sendMessage(message) {},
};

const Person1 = {
    chat: Chat,
    sendMessage(msg, person) {
        this.chat.sendMessage(msg, person);
    },
};

const Person2 = {
    chat: Chat,
    sendMessage(msg, person) {
        this.chat.sendMessage(msg, person);
    },
};

const Person3 = {
    chat: Chat,
    sendMessage(msg, person) {
        this.chat.sendMessage(msg, person);
    },
};

const Store = {
    subscribers: new Set(),
    state: {},
    rootReducer: () => {
        return {
            a: 'v',
        };
    },
    subscribe(cb) {
        this.subscribe.add(cb);
    },
    unsubscribe(cb) {
        this.subscribe.delete(cb);
    },
    dispatch(action) {
        this.state = this.rootReducer(this.state, action);

        [...this.subscribers.values].forEach((cb) => cb(this.state));
    },
};
