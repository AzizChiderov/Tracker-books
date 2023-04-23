const API_URL = 'http://localhost:1717'
async function getBookEdit(id) {
  const response = await fetch(`${API_URL}/books/update/${id}`)
  const data = await response.json()
  return data
}
async function renderBookEdit() {
    const bookId = new URLSearchParams(window.location.search).get('id')
    const data = await getBookEdit(bookId)
    console.log(data)
  document.querySelector('.book-detail h1').textContent = data.name
  document.querySelector("#name").textContent = data.name
  document.querySelector("#author").textContent = data.author
  document.querySelector("#publishYear").textContent = data.publishYear
  document.querySelector("#publishHouse").textContent = data.publishHouse
  document.querySelector("#pagesNumber").textContent = data.pagesNumber
  document.querySelector("#genres").textContent = data.genres
  document.querySelector("#originalLanguage").textContent = data.originalLanguage
  for (let key in data) {
    const tr = createTableRow(key, data[key])
    if (tr) tbody.append(tr)
  }
}
renderBookEdit()