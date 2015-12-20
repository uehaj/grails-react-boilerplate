import $ from 'jquery'

//const urlBase = 'http://localhost:3000/api/'
const urlBase = '/api/'

/**
 * Ajax functions.
 * TODO: rewrite with fetch APIs.
 */

export function getBooks(callback) {
  $.ajax({
    type: 'GET',
    url: urlBase + 'books.json?max=100',
    contentType: 'application/json',
    dataType: 'json',
    cache: false,
    success: (data) => {
      callback(data)
    },
    error: (xhr, status, err) => {
      console.error(xhr, status, err.toString())
    }
  });
}

export function getBook(id, callback) {
  $.ajax({
    type: 'GET',
    url: urlBase + `books/${id}.json`,
    contentType: 'application/json',
    dataType: 'json',
    cache: false,
    success: (data) => {
      callback(data)
    },
    error: (xhr, status, err) => {
      console.error(xhr, status, err.toString())
    }
  });
}

export function updateBook(id, book, callback) {
  console.log(">>")
  console.log(book);
  $.ajax({
    type: 'PUT',
    url: urlBase + `books/${id}.json`,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(book),
    cache: false,
    success: (data) => {
      if (callback !== undefined) {
        callback(data)
      }
    },
    error: (xhr, status, err) => {
      console.error(xhr, status, err.toString())
    }
  });
}
