import React,{ useEffect } from 'react'

export default function EmailComponent({email, onChange, error, setError}) {

    useEffect(()=>{
        if(email.length >0)
            validate();
    });
    const validate = ()=>{
        let re = /\S+@\S+\.\S+/;
        if(re.test(email)){
            setError('');
        }
        else{
            setError('Enter a valid email.');
        }
    }
    return (
        <>
            <div className="col-md-12">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" onChange={(event)=>onChange(event.target.value)} className="form-control" id="inputEmail" />
            </div>
            <h5>{error}</h5>
        </>
    )
}
