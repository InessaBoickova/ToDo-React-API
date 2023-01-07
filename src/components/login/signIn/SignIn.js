import '../../../style/form.sass'
import { Service } from '../../../services'
import Spinner from '../../spinner/Spinner'
import { useState } from 'react'

const SignIn = () =>{
    const {signIn,loading} = Service();
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const sendForm = (e) =>{
        e.preventDefault();
        const data = {
              "email": email,
              "password": password, 
        }
        signIn(data);
    }
  
    return (
        <div className= 'form'>
            <header>
                <h1>Sign in</h1>
           </header>
            <form onSubmit={(e)=> sendForm(e)}>
                <div className="form_block">
                    <input  name='email'className="form_input" type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <label htmlFor="email">Your email</label>
                </div>

                <div className="form_block">
                    <input  name='password'className="form_input" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <label htmlFor="password">Your password</label>
                </div>
                <button className='form_button' type='submit'>
                    {loading ? <Spinner/> : 'Sign in' }
                </button>
            </form>
        </div>
    )
}

export default SignIn;