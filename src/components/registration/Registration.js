import { useState } from 'react'
import './Registration.sass'

const Registration = () =>{
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const validText = (e) =>{
      e.length < 10 && setText(e) 
  }
  const validPassword = (e) =>{
      e.length < 10 && setPassword(e) 
  }

  const cleanForm = () =>{
      if (text && password){
          setPassword('');
          setText('');
      }else{
          alert('Заполните данные')
      }
  }
  return (
        <div className="registration">
            <span>Форма Регистрации</span>
             <form action="#">
                <div className="registration_input">
                    <input name='login' type="text" onChange={(e) => validText(e.target.value) } value= {text}/>
                    <label htmlFor="login">Введите логин</label>
                </div>
                <div className="registration_input">
                    <input className="registration_password" type="password" onChange={(e) => validPassword(e.target.value)} value={password}/>
                    <label htmlFor="password">Введите пароль</label>
                </div>
                <p><label>Сохранить данные</label><input type="checkbox" className='registration_checkbox' checked/></p>
             </form>
            <button onClick={ () => cleanForm()}>Войти</button>
        </div>
    )
}

export default Registration;