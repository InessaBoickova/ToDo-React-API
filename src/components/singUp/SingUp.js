import '../../style/form.sass'
import Service from '../services/SendForm'
import { useState} from 'react'

const SingUp = () =>{
  let servic = new Service()
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(20);
  const [isMan, setIsMan] = useState(false);

  const validName = (e) =>{
      setName(e)
  }

  const validUserName = (e) =>{
      setUserName(e)
  }

  const validEmail = (e) =>{
      setEmail(e)
  }

  const validPassworld = (e) =>{
      setPassword(e)
  }

  const validAge = (e) =>{
      setAge(e);
  }

  const onChecked = () =>{
    setIsMan(!isMan);
  }

  const sendForm = (e) =>{
      e.preventDefault();
      let data = {
            "name": name,
            "username": userName,
            "email": email,
            "password": password,
            "isMan": isMan,
            "age": age
        }
      
      servic.singUp(data);
  }

  return (
        <div className="form">
           <header>
                <h1>Sign up</h1>
           </header>

            <div>
                <form action="#">
                    <div className="form_block">
                        <input className="form_input"
                               name='name' type="text" 
                              onChange={(e) => validName(e.target.value) } 
                              value= {name} 
                               />
                        <label htmlFor="name">Your name</label>
                    </div>

                    <div className="form_block">
                        <input  name='username'className="form_input"
                         type="text" onChange={(e) => validUserName(e.target.value)} 
                         value={userName} />
                        <label htmlFor="username">Your username</label>
                    </div>

                    <div className="form_block">
                        <input name='email'className="form_input" 
                        type="email" onChange={(e) => validEmail(e.target.value)} 
                        value={email} />
                        <label htmlFor="email">Your email</label>
                    </div>

                    <div className="form_block">
                        <input  name='password'className="form_input"
                         type="password" onChange={(e) => validPassworld(e.target.value)} 
                         value={password}/>
                        <label htmlFor="password">Your password</label>
                    </div>
                    
                    <div className='form_checkbox'>
                        <label>Is Man</label>
                        <input type="checkbox" checked={isMan}
                          onChange={onChecked} className="form_input" />
                    </div>

                    <div className="form_block">
                        <input min={10} max={100}
                          name='age'className="form_input" 
                          type="number" onChange={(e) => validAge(e.target.value)} value={age}/>
                        <label htmlFor="age">Your age</label>
                    </div>

                    <button className='form_button' onClick={(e)=>sendForm(e)}>Sign up</button>

                </form>
            </div>
        </div>
    )
}

export default SingUp;