const socket = io(); // Connect to the server

// Function to send a message
function sendMessage() {
    const input = document.querySelector('#message'); // Select input field
    const message = input.value; // Get the message value

    if (message.trim() !== '') {
        socket.emit('chat message', message); // Send the message to the server
        input.value = ''; // Clear the input field
    }
}

// Listen for messages from the server
socket.on('chat message', (msg) => {
    const messages = document.querySelector('#messages'); // Select the messages list
    const li = document.createElement('li'); // Create a new list item
    li.textContent = msg; // Set the text content of the list item
    messages.appendChild(li); // Add the list item to the messages list
});

// Allow pressing Enter to send the message
document.querySelector('#message').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
