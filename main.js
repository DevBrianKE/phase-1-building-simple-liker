// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//add event listener to all heart elements
document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like=glyph')
  hearts.forEach(heart.forEach(heart => {
    heart.addEventListener('click', handleLike)
  }))
})

function handleLike(event) {
  const heart = event.target

  //simulate the server call to like or unlike the post
  mimicServerCall()
  .then(() => {
    //if server call is succeesfull, toggle the heart state
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART
      heart.classList.add('activated-heart')
    }else {
      heart.textContent = EMPTY_HEART
      heart.classList.remove('activated-heart')
    }
  })
  .catch((error) => {
    //if server the server call fails, show the error modal
    const modal = document.getElementById('modal')
    const modalMessage = document.getElementById('modal-message')
    modalMessage.textContent = error //display error message
    modal.classList.remove('hidden') // show the modal
    //hide the modal after  3 seconds
    setTimeout(() => {
      modal.classList.add('hidden') // hide modal class
    }, 3000)
  })
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
