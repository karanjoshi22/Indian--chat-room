const socket = io(); // Establish connection with the server

// To send a message
function sendMessage() {
    const input = document.querySelector('#message');
    const message = input.value;

    if (message.trim() !== '') {
        socket.emit('chat message', message); // Send the message to the server
        input.value = ''; // Clear the input field
    }
}

// Receive messages from the server
socket.on('chat message', (msg) => {
    const messages = document.querySelector('#messages');
    const li = document.createElement('li');
    li.textContent = msg;
    messages.appendChild(li); // Add the message to the list
});
