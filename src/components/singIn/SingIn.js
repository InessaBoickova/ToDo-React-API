import '../../style/form.sass'
import { useState } from 'react'

const SignIn = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const validEmail = (e) =>{
      e.length < 10 && setEmail(e) 
    }
  
    const validPassworld = (e) =>{
      e.length < 10 && setPassword(e) 
    }

    return (
        <div className= 'form'>
            <header>
                <h1>Sign in</h1>
           </header>
            <form action="#">
                <div className="form_block">
                    <input  name='email'className="form_input" type="email" onChange={(e) => validEmail(e.target.value)} value={email}/>
                    <label htmlFor="email">Your email</label>
                </div>

                <div className="form_block">
                    <input  name='password'className="form_input" type="password" onChange={(e) => validPassworld(e.target.value)} value={password}/>
                    <label htmlFor="password">Your password</label>
                </div>
                
                <button className='form_button'>Sing in</button>

            </form>
    </div>
    )
}

export default SignIn;