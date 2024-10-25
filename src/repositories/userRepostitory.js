const CrudRepository = require('../lib/crudRepository');
const User = require('../models/User');

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
}

// Add any user-specfic repository methods here

}
module.exports = new UserRepository();