const
    config = require('./config.json'),
    Mongoose = require('mongoose'),
    { generateHash, validatePassword } = require('./validate')


Mongoose.connect(config.uri)
Mongoose.connection.on('error', err => {
    console.log('MongoDB Connection Error:' + err)
})


const UserSchema = new Mongoose.Schema({
    name: String,
    avatar: String,
    socketId: String,
    password: String
}, { strict: false })

const MessageSchema = new Mongoose.Schema({
    message: String,
    user: UserSchema
}, { strict: false })

const
    User = Mongoose.model('users', UserSchema),
    Message = Mongoose.model('messages', MessageSchema)


const activeUsers = () => {}

const allMessages = () => {}

const findUserByName = userName => {}

const loginUser = (user, password, socketId) => {

}

const createUser = (userName, password, socketId) => {

}

const createMessage = data => {

}

const logoutUser = socketId => {

}

module.exports = {
    activeUsers,
    allMessages,
    createUser,
    createMessage,
    loginUser,
    logoutUser
}