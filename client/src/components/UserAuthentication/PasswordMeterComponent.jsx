import React from 'react'

export default function PasswordMeterComponent({value, label}) {
    const returnColor = ()=>{
        switch(value){
            case 1:
                return 'red';
            case 2:
                return 'blue';
            case 3:
                return 'yellow';
            case 4:
                return 'green';
            default:
                return 'none';
        }
    }

    const changeColor = ()=>({
        width:`${value*25}%`,
        background:returnColor()
    })
    return (
        <>
            <div className="progress">
                <div className="progress-bar" style={changeColor()}></div>
            </div>
            <h5 className="mt-2">{label}</h5>
        </>
    )
}
