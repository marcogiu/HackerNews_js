import '../scss/style.scss'

import { createHeader } from './createElement.js'
import { createMain } from './createElement.js'


const news_URL = 'https://hacker-news.firebaseio.com/v0/newstories.json'
let index = 0



// fetch and return the list of news
async function getListNews() {
  const response = await fetch(news_URL)
  const data = await response.json()
  return (data.slice(index, index + 10))
}

// fetch and return the list of news
async function fetchItems(id) {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  const data = await response.json()
  displayElement(data)
}

function displayElement(news) {
  const container = document.querySelector('.container')
  const cardNews = document.createElement('div')
  cardNews.innerHTML = `<a href="${news.url}" target="_blank"><h3>${news.title}</h3></a><article>${news.id}</article>`
  container.appendChild(cardNews)
}

async function loadNews() {
  const listArray = await getListNews()
  listArray.forEach(fetchItems)
}

loadNews()

const loadMore_btn = document.querySelector('.load-more')

loadMore_btn.addEventListener('click', () => {
  index += 10
  getNews()
})










