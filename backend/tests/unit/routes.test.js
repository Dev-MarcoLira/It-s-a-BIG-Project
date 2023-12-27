const { describe, it } = require('node:test')
const { strictEqual, deepStrictEqual } = require('assert/strict')

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

    it('should get the req body', async()=>{
        let response
        await fetch(`${BASE_URL}/users`, {
            body: "Hello there",
            method: 'post'
        })
            .then(res => res.json())
            .then(async body => {
                response = body
            })
            .catch(err => new Error(err))
            strictEqual(response, '/users')
    })

})