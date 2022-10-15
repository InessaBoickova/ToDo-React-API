import './Registration.sass'
import form from '../services/SendForm';
import { useState } from 'react'

const Registration = () =>{
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(20);
  const [isMan, setIsMan] = useState(false);
  
  const validName = (e) =>{
      e.length < 10 && setName(e) 
  }

  const validUserName = (e) =>{
    e.length < 10 && setUsername(e) 
  }

  const validEmail = (e) =>{
    e.length < 10 && setEmail(e) 
  }

  const validPassworld = (e) =>{
    e.length < 10 && setPassword(e) 
  }

  const validAge = (e) =>{
    e.length < 10 && setAge(e) 
  }

  const onChecked = () =>{
    setIsMan(!isMan);
  }

  const sendForm = () =>{
    let data = {
            "name": name,
            "username": username,
            "email": email,
            "password": password,
            "isMan": age,
            "age": isMan
        }
        form(data);
  }

  return (
        <div className="registration">
           <header>
                <h1>Registration Form</h1>
           </header>

            <div className="registration_form">
                <form action="#">
                    <div className="registration_block">
                        <input className="registration_input" name='name' type="text" onChange={(e) => validName(e.target.value) } value= {name}/>
                        <label htmlFor="name">Your name</label>
                    </div>

                    <div className="registration_block">
                        <input  name='username'className="registration_input" type="text" onChange={(e) => validUserName(e.target.value)} value={username}/>
                        <label htmlFor="username">Your username</label>
                    </div>

                    <div className="registration_block">
                        <input  name='email'className="registration_input" type="email" onChange={(e) => validEmail(e.target.value)} value={email}/>
                        <label htmlFor="email">Your email</label>
                    </div>

                    <div className="registration_block">
                        <input  name='password'className="registration_input" type="password" onChange={(e) => validPassworld(e.target.value)} value={password}/>
                        <label htmlFor="password">Your password</label>
                    </div>
                    
                    <div className='registration_checkbox'>
                        <label>Is Man</label>
                        <input type="checkbox" checked={isMan}  onChange={onChecked} className="registration_input" />
                    </div>

                    <div className="registration_block">
                        <input name='age'className="registration_input" type="number" onChange={(e) => validAge(e.target.value)} value={age}/>
                        <label htmlFor="age">Your age</label>
                    </div>

                    <button className='registration_button' onClick={()=>sendForm()}>Register</button>

                </form>
            </div>
        </div>
    )
}

export default Registration;