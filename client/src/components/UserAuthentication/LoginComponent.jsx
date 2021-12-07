import React, {useState} from 'react';
import EmailComponent from './EmailComponent';
import PasswordComponent from './PasswordComponent';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/UserAction';


function LoginComponent({login, userData}) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const handleSubmit = (event)=>{
        event.preventDefault();
        let alertMessage ='';
        if(emailError)
        alertMessage += "Please enter valid email ";
        if(passwordStrength<1)
        alertMessage += "Please enter a password with minimum good strength";
        if(alertMessage)
            alert(alertMessage);
        else 
            login(email, password);
    }
    return (
        <form className="row g-3" onSubmit={handleSubmit}>
            <EmailComponent 
                email={email} 
                onChange={setEmail} 
                error={emailError} 
                setError={setEmailError} 
                />
            <PasswordComponent 
                password={password} 
                onChange={setPassword} 
                passwordStrength={passwordStrength} 
                setPasswordStrength={setPasswordStrength} 
                label="Password" required />
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
        </form>
    )
}


const mapStateToProps = state =>{
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        login:(email, password)=> dispatch(loginUser({email,password}))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);