import './Main.sass'
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';
import {useState} from 'react'

const Main = () => {
    const [show,setShow] = useState(false);
    
    const onShow = () =>{
        setShow(!show);
    }

    return (
        <>
            <div className="main">
                <button disabled= {!show} onClick={()=>onShow()}>Sign up</button>
                <button disabled = {show} onClick={()=> onShow()}>Sign in</button>
           </div>

           <div className="main_wrapper">
                {show ?  <SignIn/> : <SignUp/> }
           </div>
        </> 
    )
}

export default Main;