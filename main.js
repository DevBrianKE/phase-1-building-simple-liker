// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Wait for the DOM to fully load before executing script
document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the 'like-glyph' class (hearts)
  const hearts = document.querySelectorAll('.like-glyph');
  // Add a click event listener to each heart
  hearts.forEach(heart => {
    heart.addEventListener('click', handleLike);
  });
});



// Function to handle the like action
function handleLike(event) {
  // Get the target heart that was clicked
  const heart = event.target;

  // Simulate a server call to like or unlike the post
  mimicServerCall()
    .then(() => {
      // If the server call is successful, toggle the heart state
      if (heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart'); // Add class to make heart appear red
      } else {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart'); // Remove class to make heart appear empty
      }
    })
    .catch((error) => {
      // If the server call fails, show the error modal
      const modal = document.getElementById('modal');
      const modalMessage = document.getElementById('modal-message');
      modalMessage.textContent = error; // Display the error message
      modal.classList.remove('hidden'); // Show the modal
      // Hide the modal after 3 seconds
      setTimeout(() => {
        modal.classList.add('hidden'); // Hide the modal
      }, 3000);
    });
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
