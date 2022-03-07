import '../scss/app.scss'

// get elements from page
const img = document.querySelector('img')
const inputText = document.querySelector('#input-search-gif')
const inputSubmit = document.querySelector('#input-submit-search')
const errorDisplay = document.querySelector('#error-msg')

inputSubmit.addEventListener('click', performSearch)

const queryStart =
  'https://api.giphy.com/v1/gifs/translate?api_key=ENgp3UU19tYVBEpsMUmNRxpvXOOMnfnW&s='

let queryFull = ''

function performSearch(e) {
  const searchValue = inputText.value

  calculateQuery(searchValue)
  searchImage()
}

function calculateQuery(searchString) {
  const newString = queryStart + searchString
  queryFull = newString
}

function searchImage() {
  fetch(queryFull, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      displaySuccess()
      displayImage(response.data.images.original.url)
    })
    .catch((error) => {
      img.src = '#'
      displayError()
      console.log(error)
    })
}

function displayImage(imageUrl) {
  img.src = imageUrl
}

function displayError() {
  errorDisplay.innerHTML = 'Something Went Wrong!'
}

function displaySuccess() {
  errorDisplay.innerHTML = ''
}
