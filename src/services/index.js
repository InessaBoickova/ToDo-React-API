import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Service = () => {
    const _baseUrl = 'https://first-node-js-app-r.herokuapp.com/api/'
    const navigate = useNavigate();
    const [loading,setLoaging] = useState(false)
    
    const signUp = async (data) =>{
        setLoaging(true);
        try {
            const result = await fetch(`${_baseUrl}users/register`,{
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
                alert('Successful registration. Sing in');
                setLoaging(false);
            }
            }catch(error){
                console.log(error);
                setLoaging(false);
            }
    }
    
    const signIn = async (data) =>{
        setLoaging(true);
        try{
            const result = await fetch(`${_baseUrl}auth/login`,{
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
                setLoaging(false);
            }
            return resultJson

        }catch(error){
            console.log(error);
            setLoaging(false);
        }
    }

    const sendTask = async (task) =>{
        const token = localStorage.getItem('token')
        try{
            const result = await fetch(`${_baseUrl}todos`,{
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
                alert('Something went wrong, try again')
                console.log(error)
            }
    }

    const getTask = async () =>{
        const token = localStorage.getItem('token');
        try{
            const result = await fetch(`${_baseUrl}todos`,{
                method:'GET',  
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const resultJson = await result.json();
            return resultJson;
            }catch(error){
                alert('Something went wrong, try again')
                console.log(error)
            }
    }

    const deleteTask = async (id) =>{
        const token = localStorage.getItem('token');

        const result = await fetch(`${_baseUrl}todos/${id}`,{
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

        const result = await fetch(`${_baseUrl}todos/${id}/isCompleted`,{
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

        const result = await fetch(`${_baseUrl}mongoose/todos/${id}`,{
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

    return {signIn,signUp,sendTask,getTask,deleteTask,isCompletedTask, upDatedTask,loading};
}
