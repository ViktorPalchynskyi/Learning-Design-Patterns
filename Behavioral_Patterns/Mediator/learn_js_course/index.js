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
