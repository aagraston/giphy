import '../scss/app.scss'

const img = document.querySelector('img')

fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=ENgp3UU19tYVBEpsMUmNRxpvXOOMnfnW&s=cats',
  { mode: 'cors' }
)
  .then((response) => response.json())
  .then((response) => {
    img.src = response.data.images.original.url
  })
