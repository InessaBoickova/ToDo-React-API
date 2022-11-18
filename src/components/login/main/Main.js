import './Main.sass'
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';
import { useState , useRef, useEffect} from 'react'

const Main = () => {
    const buttonUp = useRef(null);
    const buttonIn = useRef(null);
    const [show,setShow] = useState(false);
    const [disabled,setDisabled] = useState(false);

    useEffect(() => {
        buttonIn.current.disabled = disabled;
        buttonUp.current.disabled = !disabled;

    })

    const onShow = () =>{
        setShow(!show);
    }

    const onDisabled = () =>{
        setDisabled(!disabled);
       
    }

    return (
        <>
            <div className="main">
                <button ref={buttonUp} onClick={()=>{
                    onShow();
                    onDisabled();
                }}>Sign up</button>
                <button ref={buttonIn} onClick={()=>{
                    onShow();
                    onDisabled();
                }}>Sign in</button>
           </div>

           <div className="main_wrapper">
                {show ?  <SignIn/> : <SignUp/> }
           </div>
        </> 
    )
}

export default Main;