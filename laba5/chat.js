function sendMessage(user) {
    let message;
    let chatBox;

    if (user === "1") {
        message = document.getElementById('user1').value;
        chatBox = document.getElementById('user1');
        document.getElementById('user1').value = ''; // Очищення поля
    } else {
        message = document.getElementById('user2').value;
        chatBox = document.getElementById('user2');
        document.getElementById('user2').value = ''; // Очищення поля
    }

    if (message.trim() !== '') {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.classList.add(user === 1 ? 'user1' : 'user2');
        newMessage.textContent = `USER ${user}: ${message}`;
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Прокручування вниз
    }
}