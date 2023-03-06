const axios = require('axios')
var _ = require('lodash')
import '../scss/style.scss';
import { createHeader, createMain, createCard, createFooter } from './modules/createElement';



createHeader()
createMain()
createFooter()

const API_URL = process.env.API_URL
const API_URL_ID = process.env.API_URL_ID

let count = 0
const loader = document.querySelector('.loader')
const container = document.querySelector('.container')
const loadMore_button = document.querySelector('.load-more')

async function fetchItems(id) {
  axios.get(`${API_URL_ID}/${id}.json`)
    .then(response => {
      const data = _.get(response, 'data')
      createCard(data)
      loader.style.display = 'none'
      container.style.display = 'grid'
    })
    .catch(error => {
      alert('Error, please reload the page')
      console.log(error)
    })
}

async function loadNews() {
  axios.get(API_URL)
    .then(response => {
      let data = _.get(response, 'data', '')
      data.slice(count, (count + 10)).forEach(fetchItems)
    })
}

setTimeout(loadNews, 3000)

loadMore_button.addEventListener('click', () => {
  count += 10
  loadMore_button.classList.add('spinner')
  setTimeout(() => {
    loadNews()
    loadMore_button.classList.remove('spinner')
  }, 2000)
})








