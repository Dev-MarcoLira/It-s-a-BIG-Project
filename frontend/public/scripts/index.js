const BASE_API = 'http://localhost:3030/users'

window.onload = () =>{

    if(!localStorage.loginToken){

        window.location = 'http://localhost:8081/login'

    }

}