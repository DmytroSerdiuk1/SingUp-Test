import React, { useState } from 'react'
import { Label } from '..'
import { ShowPassword } from '../Icon';
import "./Input.scss"

const Input = ({placeholder, labelText, touched, error, type, ...props}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const typePassword = type === "password"

    return (
        <div className="input-wrapper">
            <Label text={labelText} />
            <div className="input-wrapper-target">
                <input className={touched ? `input ${error ? "input_error" : "input_confirm"} ${hidePassword ? 'input-show' : ""}` : "input"} 
                    placeholder={placeholder} type={`${hidePassword && typePassword ? "password" : "text"}`} {...props}/>
                {
                    type === "password" ? 
                    <button type="button" className="input-show-password" onClick={() => setHidePassword(!hidePassword)}>
                        <ShowPassword/>
                    </button>
                    : null
                }
            </div>
            {
                error && touched ? <span className="input-text-error">{error}</span> : null
            }
        </div>
    )
}

export default Input
