import './Welcome.sass'
import SingUp from '../singUp/SingUp';
import SignIn from '../singIn/SingIn';
import { useState , useRef, useEffect} from 'react'

const Welcome = () => {
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
            <div className="welcome">
                <button ref={buttonUp} onClick={()=>{
                    onShow();
                    onDisabled();
                }}>Sing up</button>
                <button ref={buttonIn} onClick={()=>{
                    onShow();
                    onDisabled();
                }}>Sing in</button>
           </div>

           <div className="welcome_wrapper">
                {show ?  <SignIn/> : <SingUp/> }
           </div>
        </> 
    )
}

export default Welcome;