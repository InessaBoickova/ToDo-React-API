import './Main.sass'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';
import {useState, useRef} from 'react'

const Main = () => {
    const SignInRef = useRef(null);
    const SignUpRef = useRef(null);
    const [show, setShow] = useState(true);
    const nodeRef = show ? SignUpRef : SignInRef;

    const onShow = () =>{
        setShow(!show);
    }

    return (
        <>
        <SwitchTransition>
            <CSSTransition
                key={show}
                nodeRef={nodeRef}
                addEndListener={(done) => {
                nodeRef.current.addEventListener("transitionend", done, false);}}
                classNames="fade">
            <div>
                <div className="main">
                    <button disabled= {!show} onClick={()=>onShow()}>Sign up</button>
                    <button disabled = {show} onClick={()=> onShow()}>Sign in</button>
                </div>
                <div className="main_wrapper" ref={nodeRef}>
                    {show ?  <SignIn/> : <SignUp ref={nodeRef}/> }
                </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </>
    )
}

export default Main;