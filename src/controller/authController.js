const authService = require('../service/authService')

exports.register = async (req, res) => {
    const {username, email, password} = req.body
    try {
        const result = await authService.register({username, email, password})
        res.status(201).json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body
    try {
        const result = await authService.login({email, password})
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}