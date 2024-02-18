 // Smooth scrolling
    $('a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800);
      }
    });

    // Form submission with AJAX
    function sendMessage() {
      const name = $('#name').val();
      const email = $('#email').val();
      const message = $('#message').val();

      $.ajax({
        type: 'POST',
        url: 'send_message.php', // Update with your backend script URL
        data: { name: name, email: email, message: message },
        success: function(response) {
          $('#exampleModal').modal('hide'); // Hide the modal after successful submission
          alert('Message sent successfully!');
          // You can add further actions here, such as clearing the form fields or displaying a success message
        },
        error: function(xhr, status, error) {
          alert('An error occurred while sending the message. Please try again later.');
          console.error(xhr.responseText);
        }
      }
      });
