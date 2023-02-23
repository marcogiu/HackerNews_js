import githubImg from '/src/img/github-icon.svg'
import linkedinImg from '/src/img/linkedin-icon.svg'
import websiteImg from '/src/img/website-icon.svg';

const linkWebsite = 'https://marcogiu.github.io/myWebsite/'
const linkGithub = 'https://github.com/marcogiu'
const linkLinkedin = 'https://www.linkedin.com/in/marco-giuliani-2a20b4179/'

export function createHeader() {

  let header = document.createElement('header')
  document.body.appendChild(header)
  let title = document.createElement('h1')
  title.innerHTML = 'Hacker News'
  header.appendChild(title)
  let linkList = document.createElement('ul')
  header.appendChild(linkList)

  function create_li(linkOut, linkImg) {
    let li = document.createElement('li')
    linkList.appendChild(li)
    let a = document.createElement('a')
    a.href = linkOut
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    li.appendChild(a)
    let img = document.createElement('img')
    img.src = linkImg
    a.appendChild(img)
    img.classList.add('img')
  }

  create_li(linkWebsite, websiteImg)
  create_li(linkGithub, githubImg)
  create_li(linkLinkedin, linkedinImg)
}

export function createMain() {
  let main = document.createElement('main')
  document.body.appendChild(main)

  let container = document.createElement('div')
  container.classList.add('container')
  main.appendChild(container)

  let loadMore = document.createElement('button')
  loadMore.classList.add('load-more')
  loadMore.innerHTML = 'Load More'
  main.appendChild(loadMore)
}

export function createCard(news) {
  let container = document.querySelector('.container')
  let card = document.createElement('div')
  card.classList.add('card')
  container.appendChild(card)

  let title = document.createElement('h3')
  title.classList.add('card-title')
  title.innerHTML = `${news.title}`
  card.appendChild(title)

  let dataContainer = document.createElement('div')
  dataContainer.classList.add('card-data')
  title.after(dataContainer)

  let link = document.createElement('a')
  link.classList.add('card-link')
  link.setAttribute('href', news.url)
  link.innerHTML = 'click here to read'
  dataContainer.appendChild(link)


  let date = document.createElement('p')
  date.classList.add('card-date')
  date.innerHTML = `${timeConverter(news.time)}`

  link.after(date)
}

export function createFooter() {
  let footer = document.createElement('footer')
  document.body.appendChild(footer)
}

//----- Time conversion -----
function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp * 1000);
  let months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = ('0' + a.getHours()).slice(-2);
  let min = ('0' + a.getMinutes()).slice(-2);
  let sec = ('0' + a.getSeconds()).slice(-2);
  let time = `${date}-${month}-${year} ${hour}:${min}:${sec}`;
  return time;
}








