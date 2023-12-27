const form = document.querySelector('form')
const BASE_API = 'http://localhost:3030/users'

window.onload = () =>{
    form.action = BASE_API
}

form.addEventListener('submit', async e =>{

    e.preventDefault()

    const name = document.querySelector('input[type=text]')
    const email = document.querySelector('input[type=email]')
    const password = document.querySelector('input[type=password]')

    await fetch(BASE_API, {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
        .then(res => res.json())
        .then(status => {
            for(const response in status)
                alert(status[response])
            
        })
        .catch(err => {
            alert(err)
        })
})