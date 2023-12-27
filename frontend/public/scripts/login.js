const BASE_API = 'http://localhost:3030/users/login'
const form = document.querySelector('form')

window.onload = ()=>{

    form.action = BASE_API

}

form.addEventListener('submit', async(e)=>{

    e.preventDefault()
    
    const email = document.querySelector('input[type=email]').value    
    const passwd = document.querySelector('input[type=password]').value    
    
    await fetch(BASE_API, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors',
        body: JSON.stringify({
            "email": email,
            "passwd": passwd
        })
    })
        .then(res => res.json())
        .then(data=>{

            for(const response in data)
                alert(data[response])
            
        })
        .catch(err=>{
            alert(err)
        })
        
})