import { getDetailBooks } from "./api.js"
import { renderDetailPage } from './utils/creators.js'
import { deleteBook } from "./api.js"

// console.log(window.location)

const search = window.location.search
const searchParams = new URLSearchParams(search)

let id = searchParams.get('id')

// console.log(id)

//  нашли ID FROM LINK

document.querySelector('.book-detail a').setAttribute('href', `/edit.html?id=${id}`)

getDetailBooks(id)
  .then((data) => {
    renderDetailPage(data)
    // console.log(data)
    const deleteBtn = Array.from(document.querySelectorAll('.delete-btn'))
    // console.log(deleteBtn[0])
    deleteBtn[0].addEventListener('click', () => {
      // console.log(id)
      window.location.href = 'index.html'
      deleteBook(id)
    })
  })
  .catch(() => {

  })
  .finally(() => {
    console.log('finally')
  })
