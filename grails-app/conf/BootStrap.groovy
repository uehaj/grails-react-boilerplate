import sample.*

class BootStrap {

    def init = { servletContext ->
        assert new Book(title: 'King Lear', price: '10000').save()
        assert new Book(title: 'Hamlet', price: '20000').save()
        assert new Book(title: 'Othello', price: '30000').save()
        assert new Book(title: 'Henry IV', price: '40000').save()
    }
    def destroy = {
    }
}
