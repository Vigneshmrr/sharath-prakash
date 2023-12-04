$(document).ready(function() {
  // Hide the chat container initially
  $('#chat-container').hide();

  // Button click to open the chat
  $('#open-chat-btn').on('click', function() {
    $('#chat-container').show();
  });

  // Send message event handlers
  $('#send-btn').on('click', function() {
    sendMessage();
  });

  $('#message-input').on('keypress', function(e) {
    if (e.which === 13) {
      sendMessage();
    }
  });

  function sendMessage() {
    var message = $('#message-input').val();
    if (message.trim() === '') {
      return;
    }

    $('#messages').append('<p><strong>You:</strong> ' + message + '</p>');
    $('#message-input').val('');

    // Simulate different bot responses based on user input
    setTimeout(function() {
      var botResponse = getBotResponse(message);
      $('#messages').append('<p><strong>Chat Bot:</strong> ' + botResponse + '</p>');
      // You can handle the bot's response as needed
    }, 1000);
  }

  function getBotResponse(userMessage) {
    // Add more responses based on user input
   if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi') || userMessage.toLowerCase().includes('hai')){
      return 'Hello! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('how are you')) {
      return 'fine';
    } else if (userMessage.toLowerCase().includes('contact')) {
      return 'You can reach us at contact sharath_builders11@gmail.com or call us at 9843932810';
    } else {
      return 'for your better convience mail to sharath_builders11@gmail';
    }
  }
});
