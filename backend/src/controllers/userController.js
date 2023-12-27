const { Op } = require('sequelize')
const User = require('../models/User')
const { createHash, randomUUID } = require('crypto')

module.exports = {

    async post(req, res){

        const { name, email, password } = req.body

        const id = randomUUID()

        User.findOne({
            attributes: ['id'],
            where: {
                email: {
                    [ Op.eq ]: email
                }
            }
        })
            .then(existingUser =>{
                if (existingUser)
                    return res.status(400).json({ error: 'User with this email already exists' });

                const hashedPassword = createHash('sha512').update(password).digest('hex');
                
                return User.create({
                    id,
                    name,
                    email,
                    password: hashedPassword
                });
            })
            .then(newUser =>{
                res.status(201).json({ userId: newUser.id });
            })
            .catch(err => {
                res.status(500).json({ err });
            })
    },
    login(req, res){

        const { email, passwd } = req.body
        const hashedPassword = createHash('sha512').update(passwd).digest('hex');

        User.findOne({
            attributes: ['id'],
            where: {
                email: {
                    [ Op.eq ]: email
                },
                password: {
                    [ Op.eq ]: hashedPassword
                }
            }
        })
        .then(user => {        
            if(user){
                res.status(200).json({ userId: user.id })
            }else{
                res.status(404).json({ error: 'User not found' })
            }
        })
        .catch(err => res.status(500).json({ error: "Internal Server Error" }))   
    }
}