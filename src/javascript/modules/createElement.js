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

  let titleMain = document.createElement('h2')
  titleMain.classList.add('main-title')
  titleMain.innerHTML = 'Latest News from Hacker News'
  main.appendChild(titleMain)

  let loader = document.createElement('span')
  loader.classList.add('loader')
  main.appendChild(loader)

  let container = document.createElement('div')
  container.classList.add('container')
  main.appendChild(container)


  let loadMore = document.createElement('button')
  loadMore.classList.add('load-more')
  loadMore.innerHTML = 'Load More'
  loadMore.id = 'load-more'
  main.appendChild(loadMore)

  let upButton = document.createElement('a')
  upButton.classList.add('up-btn')
  upButton.innerHTML = '&#8638;	'
  upButton.href = '#'
  loadMore.after(upButton)

  let downButton = document.createElement('a')
  downButton.classList.add('down-btn')
  downButton.innerHTML = '&#8643;'
  downButton.href = '#load-more'
  upButton.after(downButton)
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
  link.setAttribute('target', '_blank')
  link.setAttribute('rel', 'noopener noreferrer')
  link.innerHTML = 'click here to read'
  dataContainer.appendChild(link)


  let date = document.createElement('p')
  date.classList.add('card-time')
  date.innerHTML = `${timeConverter(news.time)}`

  link.after(date)
}

export function createFooter() {
  let footer = document.createElement('footer')
  document.body.appendChild(footer)

  let createdBy = document.createElement('p')
  createdBy.classList.add('created-by')
  createdBy.innerHTML = `Created by <a href="${linkGithub}" target="_blank" rel="noopener noreferrer">
                            Marco Giuliani</a> <br> <a target="_blank" href="https://icons8.com/icon/I48PjhWsrBoK/hacker">Hacker</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>`
  footer.appendChild(createdBy)

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
  let time = `${date}-${month}-${year} ${hour}:${min}`;
  return time;
}








