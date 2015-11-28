package sample



import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class BookController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Book.list(params), [status: OK]
    }

    @Transactional
    def save(Book bookInstance) {
        if (bookInstance == null) {
            render status: NOT_FOUND
            return
        }

        bookInstance.validate()
        if (bookInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        bookInstance.save flush:true
        respond bookInstance, [status: CREATED]
    }

    @Transactional
    def update(Book bookInstance) {
        if (bookInstance == null) {
            render status: NOT_FOUND
            return
        }

        bookInstance.validate()
        if (bookInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        bookInstance.save flush:true
        respond bookInstance, [status: OK]
    }

    @Transactional
    def delete(Book bookInstance) {

        if (bookInstance == null) {
            render status: NOT_FOUND
            return
        }

        bookInstance.delete flush:true
        render status: NO_CONTENT
    }
}
