import React, { useEffect } from 'react';
import PasswordMeterComponent from './PasswordMeterComponent';


const strength = ['', 'Low', 'Fair', 'Good', 'Excellent'];
export default function PasswordComponent({label, onChange, password, passwordStrength, setPasswordStrength}) {
    useEffect(()=>{
        calculateStrength();
    });
    const calculateStrength = ()=>{
        let length = password.length;
        const type = [/[A-Z]/g, /[a-z]/g, /[0-9]/g]
        if(length<6){
            setPasswordStrength(0);
        }
        
        if(length>= 6){
            setPasswordStrength(1);
        }

        if(length>= 8 && characterType(type)){
            setPasswordStrength(2);
        }
        type.push(/[^0-9a-zA-Z\s]/g);
        if(length>= 8 && calculateType(type)){
            setPasswordStrength(3);
        }
        let regex = /(.)\1/g;
        if(length>= 10 && !regex.test(password) && calculateType(type)){
            setPasswordStrength(4);
        }
    }

    const calculateType = (types)=>{
        let countTypes = 0;

        types.forEach(type=>{
            if(characterType(type)){
                countTypes++;
            }
        });

       return countTypes>=3 ? true : false;
    }

   const characterType = (exp)=>{
       const matches = password.match(exp) || [];
       if(matches.length === 0){
           return false;
       }
       else{
           return true;
       }
   }
    return (
        <>
            <div className="col-md-12 mb-2">
                <label htmlFor={label} className="form-label">{label}</label>
                <input type="password"  id={label} onChange={(event)=>onChange(event.target.value)} className="form-control" />
            </div>
            {password && <PasswordMeterComponent value={passwordStrength} label={strength[passwordStrength]} />}
            
        </>
    )
}
