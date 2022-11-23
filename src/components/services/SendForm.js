import { useNavigate } from "react-router-dom";

export const Service = ()=> {
    const _loginUrl = 'https://first-node-js-app-r.herokuapp.com/api/auth/login';
    const _registerUrl = 'https://first-node-js-app-r.herokuapp.com/api/users/register';
    const _todos = 'https://first-node-js-app-r.herokuapp.com/api/todos'
    const navigate = useNavigate();
    
    const signUp = async (data) =>{
        try {
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
                alert('Successful registration. Sing in')
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
            return resultJson
        }catch(error){
            console.log(error);
        }
    }

    const sendTask = async (task) =>{
        const token = localStorage.getItem('token')
        try{
            const result = await fetch(_todos,{
                method:'POST',
                body: JSON.stringify({title: task}),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const resultJson = await result.json();
            return resultJson;
            }catch(error){
                console.log(error)
            }
    }

    const getTask = async () =>{
        const token = localStorage.getItem('token');

        const result = await fetch(_todos,{
            method:'GET',  
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        const resultJson = await result.json();
        return resultJson;
    }

    const deleteTask = async (id) =>{
        const token = localStorage.getItem('token');

        const result = await fetch(`${_todos}/${id}`,{
            method:'DELETE',  
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,

            },
        })

        if(result.status === 400){
            result.json().then((a)=> {
                (a.message) ?  alert(a.message) : a.errors.map((item) => alert(item.msg));
            })
        }
        const resultJson = await result.json();
        return resultJson;
    }

    const isCompletedTask = async (id) =>{
        const token = localStorage.getItem('token');

        const result = await fetch(`${_todos}/${id}/isCompleted`,{
            method:'PATCH',  
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })

        if(result.status === 400){
            result.json().then((a)=> {
                (a.message) ?  alert(a.message) : a.errors.map((item) => alert(item.msg));
            })
        }
        const resultJson = await result.json();
        return resultJson;
    }

    const upDatedTask = async (id,task) =>{
        const token = localStorage.getItem('token');

        const result = await fetch(`https://first-node-js-app-r.herokuapp.com/api/mongoose/todos/${id}`,{
            method:'PATCH',
            body: JSON.stringify({title: task}),  
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })

        if(result.status === 400){
            result.json().then((a)=> {
                (a.message) ?  alert(a.message) : a.errors.map((item) => alert(item.msg));
            })
        }
        const resultJson = await result.json();
        return resultJson;
    }

    return {signIn,signUp,sendTask,getTask,deleteTask,isCompletedTask, upDatedTask};
}
