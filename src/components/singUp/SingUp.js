import '../../style/form.sass'
import form from '../services/SendForm';
import { useState , useRef} from 'react'

const SingUp = () =>{
  const ageInput = useRef(null);
  const nameInput = useRef(null);
  const usernNameInput  = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(20);
  const [isMan, setIsMan] = useState(false);

  const validName = (e) =>{
    (e === '' || e.length >= 15)
      ?nameInput.current.style.border = 'solid red'
      :nameInput.current.style.border = 'solid #5C5C5C'
    setName(e)
  }

  const validUserName = (e) =>{
    (e === '' || e.length >= 15)
      ?usernNameInput.current.style.border = 'solid red'
      : usernNameInput.current.style.border = 'solid #5C5C5C'
    
    setUserName(e)
  }

  const validEmail = (e) =>{
    ( e === '' || e.length >= 15)
      ?emailInput.current.style.border = 'solid red'
      :emailInput.current.style.border = 'solid #5C5C5C'
    setEmail(e)
  }

  const validPassworld = (e) =>{
    ( e === '')
      ?passwordInput.current.style.border = 'solid red'
      :passwordInput.current.style.border = 'solid #5C5C5C'
    setPassword(e)
  }

  const validAge = (e) =>{
    ( e > 10 && e < 100)
      ?ageInput.current.style.border = 'solid #5C5C5C'
      :ageInput.current.style.border = 'solid red'
    setAge(e);
  }

  const onChecked = () =>{
    setIsMan(!isMan);
  }

  const sendForm = () =>{
      let data = {
            "name": name,
            "username": userName,
            "email": email,
            "password": password,
            "isMan": isMan,
            "age": age
        }
      
      form(data);
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
                              value= {name} ref={nameInput}
                               />
                        <label htmlFor="name">Your name</label>
                    </div>

                    <div className="form_block">
                        <input  name='username'className="form_input"
                         type="text" onChange={(e) => validUserName(e.target.value)} 
                         value={userName} ref={usernNameInput}/>
                        <label htmlFor="username">Your username</label>
                    </div>

                    <div className="form_block">
                        <input name='email'className="form_input" 
                        type="email" onChange={(e) => validEmail(e.target.value)} 
                        value={email} ref = {emailInput}/>
                        <label htmlFor="email">Your email</label>
                    </div>

                    <div className="form_block">
                        <input  name='password'className="form_input"
                         type="password" onChange={(e) => validPassworld(e.target.value)} 
                         value={password} ref = {passwordInput}/>
                        <label htmlFor="password">Your password</label>
                    </div>
                    
                    <div className='form_checkbox'>
                        <label>Is Man</label>
                        <input type="checkbox" checked={isMan}  onChange={onChecked} className="form_input" />
                    </div>

                    <div className="form_block">
                        <input min={10} max={100}
                          name='age'className="form_input" 
                          ref={ageInput}
                          type="number" onChange={(e) => validAge(e.target.value)} value={age}/>
                        <label htmlFor="age">Your age</label>
                    </div>

                    <button className='form_button' onClick={()=>sendForm()}>Sign up</button>

                </form>
            </div>
        </div>
    )
}

export default SingUp;