import React from 'react'
import './Label.scss'

const Label = ({target, text}) => {
    return (
        <label className="input-label" htmlFor={target}>
            {text}
        </label>
    )
}

export default Label
