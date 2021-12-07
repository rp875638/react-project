import React, {useState} from 'react'
import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/UserAction';
import EmailComponent from './EmailComponent'
import PasswordComponent from './PasswordComponent'

function SigninComponent({signUp, userData}) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordStrength, setConfirmPasswordStrength] = useState(0);
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(emailError){
            alert("Please enter a valid email");
        }
        else if(passwordStrength<2){
            alert("Please enter a password with 'Good strength'");
        }
        else if(confirmPasswordStrength<2){
            alert("Please enter a confirm password with 'Good strength'");
        }
        else if(password != confirmPassword){
            alert("Please enter a password same as confirm password");
        }
        else{
            signUp(email, password, confirmPassword);
        }
        
    }
    return (
        <form className="row g-3" onSubmit={handleSubmit}>
            <EmailComponent 
                email={email}
                onChange={setEmail}
                error={emailError}
                setError={setEmailError}/>
            <PasswordComponent 
                label="Password"
                password={password} 
                onChange={setPassword}
                passwordStrength={passwordStrength}
                setPasswordStrength={setPasswordStrength} />
            <PasswordComponent 
                label="Confirm password"
                password={confirmPassword} 
                onChange={setConfirmPassword}
                passwordStrength={confirmPasswordStrength}
                setPasswordStrength={setConfirmPasswordStrength} />
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sigin</button>
            </div>
        </form>
    )
}

const mapStateToProps = state =>{
    return {
        userData: state.signup
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        signUp:(email, password, confirmPassword)=> dispatch(signupUser({email,password, confirmPassword}))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SigninComponent);
