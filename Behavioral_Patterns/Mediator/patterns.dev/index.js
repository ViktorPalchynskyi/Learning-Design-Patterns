class ChatRoom {
    displayMessage(from, message) {
        const timeStamp = Date.now();
        const name = from.name;

        console.log(
            `User ${name} send a message with text: ${message} ${timeStamp}`
        );
    }
}

class User {
    constructor(name, chatroom) {
        this.name = name;
        this.chatroom = chatroom;
    }

    sendMessage(text) {
        this.chatroom.displayMessage(this, text);
    }
}

const chatRoom = new ChatRoom();
const user1 = new User('Viktor', chatRoom);
const user2 = new User('Irina', chatRoom);

user1.sendMessage('Hello there!');
user2.sendMessage('Hello!');
