import '../scss/style.scss';
import { createHeader } from './modules/createElement';
import { createMain } from './modules/createElement';
import { createCard } from './modules/createElement';
import { createFooter } from './modules/createElement';



createHeader()
createMain()
createFooter()



const API_URL = process.env.API_URL
const API_URL_ID = process.env.API_URL_ID

let count = 0
const loadMore_button = document.querySelector('.load-more')

function createCardFromId(news) {
  createCard(news)
}

async function fetchItems(id) {
  axios.get(API_URL_ID)
    .then(response => {
      const data = _.get(response, 'data')
      createCardFromId(data)
    })
    .catch(error => {
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

loadNews()




loadMore_button.addEventListener('click', () => {
  count += 10
  loadNews()

})








