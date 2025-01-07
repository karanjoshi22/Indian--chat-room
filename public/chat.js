const socket = io(); // सर्वर से कनेक्शन बनाएँ

// मैसेज भेजने के लिए
function sendMessage() {
    const input = document.querySelector('#message');
    const message = input.value;

    if (message.trim() !== '') {
        socket.emit('chat message', message); // सर्वर को मैसेज भेजें
        input.value = ''; // इनपुट फील्ड खाली करें
    }
}

// सर्वर से मैसेज प्राप्त करें
socket.on('chat message', (msg) => {
    const messages = document.querySelector('#messages');
    const li = document.createElement('li');
    li.textContent = msg;
    messages.appendChild(li); // मैसेज लिस्ट में जोड़ें
});
