import { useNavigate } from "react-router-dom";

export const Service = ()=> {
    const _loginUrl = 'https://first-node-js-app-r.herokuapp.com/api/auth/login';
    const _registerUrl = 'https://first-node-js-app-r.herokuapp.com/api/users/register';
    const _sendTask = 'https://first-node-js-app-r.herokuapp.com/api/todos'
    const navigate = useNavigate();
    
    const signUp = async (data) =>{
        try{
            const result = await fetch(_registerUrl,{
                method:'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
            });

            if(result.status === 400){
                result.json().then((a)=> {
                    (a.message) ?  alert(a.message) : a.errors.map((item) => alert(item.msg));
                })
            }
            const resultJson = await result.json();
            if(!resultJson.errors){
                alert('регистрация прошла успешно')
            }
            }catch(error){
                console.log(error);
            }
    }
    
    const signIn = async (data) =>{
        try{
            const result = await fetch(_loginUrl,{
                method:'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
            });

            if(result.status === 400){
                result.json().then((a)=> {
                    (a.message) ?  alert(a.message) : a.errors.map((item) => alert(item.msg));
                })
            }

            const resultJson = await result.json();

            if(resultJson.token){
                localStorage.setItem('token', resultJson.token);
                navigate('/ToDo-React-API/todo');
            }

        }catch(error){
            console.log(error);
        }
    }

    const sendTask = async (task) =>{
        const token = localStorage.getItem('token')
        try{
            const result = await fetch(_sendTask,{
                method:'POST',
                body: JSON.stringify({title: task}),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const resultJson = await result.json();
            }catch(error){
                console.log(error)
            }
    }

    const getTask = async () =>{
        const token = localStorage.getItem('token');

        const result = await fetch('https://first-node-js-app-r.herokuapp.com/api/todos',{
            method:'GET',  
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        const resultJson = await result.json();
        return resultJson;
    }

    return {signIn , signUp,sendTask,getTask};
}
