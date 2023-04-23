import { getDetailBooks } from "./api.js"
import { editBook } from "./api.js"


const search = window.location.search
const searchParams = new URLSearchParams(search)

let id = searchParams.get('id')


getDetailBooks(id)
  .then((data) => {
    console.log(data)
    const saveBtn = document.querySelector('#save-edit-btn')


    const [inputName, inputAuthor, inputPublishYear, inputPublishHouse, inputPagesNumber, inputGenres, inputOriginalLanguage] =
      ['name', 'author', 'publishYear', 'publishHouse', 'pagesNumber', 'genres', 'originalLanguage']
        .map((name) => document.querySelector(`#${name}`))

    inputName.value = data.name
    inputAuthor.value = data.author
    inputPublishYear.value = data.publishYear
    inputPublishHouse.value = data.publishHouse
    inputPagesNumber.value = data.pagesNumber
    inputGenres.value = data.genres
    inputOriginalLanguage.value = data.originalLanguage

    let newData = {
      name: inputName.value,
      author: inputAuthor.value,
      publishYear: Number(inputPublishYear.value),
      publishHouse: inputPublishHouse.value,
      pagesNumber: Number(inputPagesNumber.value),
      genres: Array(inputGenres.value),
      originalLanguage: inputOriginalLanguage.value
    }
    saveBtn.addEventListener('click', (e) => {
      e.preventDefault()
      // console.log(id,newData)
      editBook(newData, id)
    })


  })
  .catch(() => {
    console.log('error')
  })
  .finally(() => {
    console.log('finally')
  })
