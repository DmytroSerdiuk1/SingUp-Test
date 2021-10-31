import React from 'react'
import "./Chekbox.scss"

const Chekbox = ({Icon, text, genderSwitch, value, click}) => {
    const active = genderSwitch === value;
    return (
        <label className={`chekbox ${active ? "chekbox_active" : ''}`} htmlFor={value} onClick={() => click(value)}>
            <input className={`chekbox-target ${active ? "chekbox-target_active" : ''}`} type="radio" id={value} name="gender"/>
            <Icon color={`${active ? "#3C9C41" : "#5B5B5B"}`}/>
            <span>{text}</span>
        </label>
    )
}

export default Chekbox
