const userModel = require('../model/user')

exports.login = async (userData) => {
    const {email, password} = userData
    const user = await userModel.login(email, password)
    if (!user) {
        throw new Error("Invalid credentials")
    }
    return {message: 'Login Success', user}
}

exports.register = async (userData) => {
    const {username, email, password} = userData
    const user = await userModel.findUserByEmail(email)
    if(user) {
        throw new Error("username or email already exist");
    }
    const result = await userModel.createUser(userData)
    return result
}