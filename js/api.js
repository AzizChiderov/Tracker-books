

const createApiRoute = (endpoint) => {
  // return `${API_URL}${route}`
  return (route, id) => {
    return `${endpoint}${route}${id ? '/' : ''}${id || ''}`
  }
}

let url = createApiRoute('http://localhost:1717')

export const getBooks = async () => {
  const response = await fetch(url('/books'))
  const books = await response.json()
  return books
}

export const getDetailBooks = async (id) => {
  const response = await fetch(url(`/books/detail/${id}`))
  const detailBooks = await response.json()
  return detailBooks
}

export const createBook = async (newData) => {
  const response = await fetch(url(`/books/create`), {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export const editBook = async (newData, id) => {
  const response = await fetch(url(`/books/update/${id}`), {
    method: 'PUT',
    body: JSON.stringify(newData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export const deleteBook = async (id) => {
  const response = await fetch(url(`/books/delete/${id}`), {
    method: 'DELETE'
  })
  return response.json()
}