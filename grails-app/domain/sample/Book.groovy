package sample

import grails.rest.Resource

@Resource(uri="/api/books")
class Book {
  String title
  Integer price
  static constraints = {}
}
