import '../../../style/form.sass'
import { Service } from '../../../services/SendForm';
import Spinner from '../../spinner/Spinner';
import {useState} from 'react'

const SignUp = () =>{
    const {signUp,loading} = Service();
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(20);
    const [isMan, setIsMan] = useState(false);
    const [isWoman, setIsWoman] = useState(false);

    const sendForm = (e) =>{
        e.preventDefault();
        const data = {
            "name": name,
            "username": userName,
            "email": email,
            "password": password,
            "isMan": isMan,
            "age": age  
        }
        signUp(data);
    }

return (
    <div className="form">
        <header>
            <h1>Sign up</h1>
        </header>

        <div>
            <form onSubmit={(e)=> sendForm(e)} >
                <div className="form_block">
                    <input className="form_input"
                            name='name' type="text" 
                            onChange={(e) => setName(e.target.value) } 
                            value= {name} 
                            />
                    <label htmlFor="name">Your name</label>
                </div>

                <div className="form_block">
                    <input  name='username'className="form_input"
                        type="text" onChange={(e) => setUserName(e.target.value)} 
                        value={userName} />
                    <label htmlFor="username">Your username</label>
                </div>

                <div className="form_block">
                    <input name='email'className="form_input" 
                        type="email" onChange={(e) => setEmail(e.target.value)} 
                        value={email} />
                    <label htmlFor="email">Your email</label>
                </div>

                <div className="form_block">
                    <input  name='password'className="form_input"
                        type="password" onChange={(e) => setPassword(e.target.value)} 
                        value={password}/>
                    <label htmlFor="password">Your password</label>
                </div>
                
                <div className='form_checkbox'>
                    <label>Are you a man?</label>
                    <input type="checkbox" checked={isMan}
                        onChange={() => setIsMan(!isMan)} className="form_input" />
                </div>

                <div className='form_checkbox'>
                    <label>Are you a woman?</label>
                    <input type="checkbox" checked={isWoman}
                        onChange={() => setIsWoman(!isWoman)} className="form_input" />
                </div>


                <div className="form_block">
                    <input min={10} max={100}
                        name='age'className="form_input" 
                        type="number" onChange={(e) => setAge(e.target.value)} value={age}/>
                    <label htmlFor="age">Your age</label>
                </div>

                <button type='submit' className='form_button'>
                    {loading ? <Spinner/> : 'Sign up' }
                </button>
            </form>
        </div>
    </div>
    )
}

export default SignUp;