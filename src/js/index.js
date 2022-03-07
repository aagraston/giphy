import '../scss/app.scss'

// get elements from page
const img = document.querySelector('img')
const inputText = document.querySelector('#input-search-gif')
const inputSubmit = document.querySelector('#input-submit-search')

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
  console.log(queryFull)
}

function searchImage() {
  fetch(queryFull, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      displayImage(response.data.images.original.url)
    })
}

function displayImage(imageUrl) {
  img.src = imageUrl
}
