import React, { useState } from 'react'
import { Chekbox, Label } from '..'
import { Female, Male, Transgender } from '../Icon';
import "./ChekboxWrapper.scss"

const ChekboxWrapper = ({setFormValue, values}) => {
    const [gender, setGender] = useState("male");
    setFormValue({values, gender})

    return (
        <>
            <Label text="Gender"/>
            <div className="chekbox-wrapper">
                <Chekbox genderSwitch={gender} Icon={Male} text="Male"  value="male" click={setGender}/>
                <Chekbox genderSwitch={gender} Icon={Female} text="Famele" value="female" click={setGender}/>
                <Chekbox genderSwitch={gender} Icon={Transgender} text="Other" value="transgender" click={setGender}/>
            </div>
        </>
    )
}

export default ChekboxWrapper
