function backtoHomePage() {
  console.log('clicked')
  window.location.href = 'index.html'
}


var backButton = document.querySelector('#back-button')
backButton.onclick = backtoHomePage;