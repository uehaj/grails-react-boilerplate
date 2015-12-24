import $ from 'jquery'

//const urlBase = 'http://localhost:3000/api/'
const urlBase = '/api/'

/**
 * Ajax functions.
 * TODO: rewrite with fetch APIs.
 */

export function getBooks(callback, callbackError) {
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
      if (callbackError !== undefined) {
        callbackError(err)
      }
    }
  });
}

export function getBook(id, callback, callbackError) {
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
      if (callbackError !== undefined) {
        callbackError(err)
      }
    }
  });
}

export function updateBook(id, book, callback, callbackError) {
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
      if (callbackError !== undefined) {
        callbackError(err)
      }
    }
  });
}

export function createBook(book, callback, callbackError) {
  $.ajax({
    type: 'POST',
    url: urlBase + `books.json`,
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
      if (callbackError !== undefined) {
        callbackError(err)
      }
    }
  });
}

export function deleteBook(id, callback, callbackError) {
  $.ajax({
    type: 'DELETE',
    url: urlBase + `books/${id}.json`,
    contentType: 'application/json',
    dataType: 'json',
    cache: false,
    success: (data) => {
      if (callback !== undefined) {
        callback(data)
      }
    },
    error: (xhr, status, err) => {
      console.error(xhr, status, err.toString())
      if (callbackError !== undefined) {
        callbackError(err)
      }
    }
  });
}

