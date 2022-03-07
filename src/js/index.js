import '../scss/app.scss'

const img = document.querySelector('img')

fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=ENgp3UU19tYVBEpsMUmNRxpvXOOMnfnW&s=cat',
  { mode: 'cors' }
).then(function (response) {
  console.log(response.json())
})
