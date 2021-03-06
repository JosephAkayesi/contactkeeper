class Route {
    constructor() {
        this.users = require('../routes/api/users')
        this.contacts = require('../routes/api/contacts').getRouter()
        this.auth = require('../routes/api/auth').getRouter()
    }

    getRoute = () => {
        return {
            users: this.users,
            contacts: this.contacts,
            auth: this.auth,
        }
    }
}

module.exports = new Route()