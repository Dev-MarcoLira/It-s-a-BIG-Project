require('dotenv').config()
const { describe, it } = require('node:test')
const { strictEqual, deepStrictEqual, ok } = require('assert/strict')

const http = require('http')
const BASE_URL = `http://localhost:${process.env.PORT}`

describe('Users routes suite', ()=>{

    it('should get hello', ()=>{
        http.get(`${BASE_URL}/users`, res=>{
            res.on('readable', ()=>{
                return strictEqual(res.read().toString(), 'Hello')
            })
        })
    })

    it('should get the user id', async()=>{

        await fetch(`${BASE_URL}/users`, {
            body: JSON.stringify({
                'name': 'Marco Antonio',
                'email': 'malirab2302@gmail.com',
                'password': '123'
            }),
            method: 'post',
            mode: 'cors'
        })
            .then(res => res.json())
            .then(async body => {
                console.log(body)
            })
            .catch(err => new Error(err))

    })

})