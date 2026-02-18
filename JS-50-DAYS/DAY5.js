const jwt = require('jsonwebtoken')
const { verify } = require('node:crypto')
const key = 'qwerty'

const createToken = () => {
    const userData = { id: 1, username: 'user1' }
    return jwt.sign(userData, key)
}

function verifyToken(token) {
    return jwt.verify(token, key)
}
let token = createToken()
verifyToken(token)