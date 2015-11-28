import $ from 'jquery'

const urlBase = 'http://localhost:3000/rest-react-test/'

/**
 * 顧客一覧。
 */
export function getBooks(callback) {
  $.ajax({
    type: 'GET',
    url: urlBase + "book/index",
//  data: JSON.stringify(),
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
