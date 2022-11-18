import { useNavigate } from "react-router-dom";

export const Service = ()=> {
    const _loginUrl = 'https://first-node-js-app-r.herokuapp.com/api/auth/login';
    const _registerUrl = 'https://first-node-js-app-r.herokuapp.com/api/users/register';
    const navigate = useNavigate();
    const post = (url,data) =>{
        fetch(url,{
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
        }).then(response => {  
            if(response.status === 400){
                response.json().then((a)=> {
                    (a.message) ?  alert(a.message) : a.errors.map((item) => alert(item.msg))  
            })
            }else{
                response.json().then(json => {   
                    localStorage.setItem('token', json.token);
                    navigate('/ToDo-React-API/todo')
                })
            }
        })
    }
        
    const signUp = (data) =>{
        post(_registerUrl,data);
    }
    
    const signIn = (data) =>{
        post(_loginUrl,data);
    }
    
    return {signIn , signUp};
}