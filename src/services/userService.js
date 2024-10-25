const UserRepository = require('../repositories/userRepository');
const userRepostitory = require('../repositories/userRepostitory');

class UserService {
    getAllUsers() {
        return userRepostitory.findALL();
    }

    getUserById(id) {
        return userRepostitory.findById(id);
    }

    cretareUser(userData) {
        return userRepostitory.update(id, userData);
    }

    deleteUser(id) {
        return userRepostitory.delete(id);
    }
}

module.exports = new UserService();