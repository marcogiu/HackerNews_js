import githubImg from '../img/github-icon.svg'
import linkedinImg from '../img/linkedin-icon.svg'
import websiteImg from '../img/website-icon.svg'

const linkWebsite = 'https://marcogiu.github.io/myWebsite/'
const linkGithub = 'https://github.com/marcogiu'
const linkLinkedin = 'https://www.linkedin.com/in/marco-giuliani-2a20b4179/'

createHeader()
createMain()



function createHeader() {

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

function createMain() {
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