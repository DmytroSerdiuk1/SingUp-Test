import React from 'react'
import "./FormWrapper.scss"
import { Formik } from 'formik';
import { Button, ChekboxWrapper, Input } from '..';
import { Logo } from '../Icon';
import * as Yup from 'yup';
 

const FormWrapper = () => {
    const setFormGender = ({values, gender}) => {
        values.gender = gender
    }

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required!'),
        password: Yup.string().min(6, "Minimal length 6").required("Password is required!"),
        confirm: Yup.string().oneOf([Yup.ref('password')], "Password mismatch").required("Confirm password is required!"),
        gender: Yup.string().oneOf(["male", "female", "transgender"], "You can vibrate only 'male', 'female', 'transgender'")
    });

    return (
        <div className="form-wrapper">
            <button>
                <Logo/>
            </button>
            <h4 className="form-wrapper__title">Sign Up with email</h4>
            <Formik
                initialValues={{ email: '', password: '', confirm: '', gender: ''}}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                  }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>
                        <ChekboxWrapper values={values} setFormValue={setFormGender}/>
                        <Input
                            error={errors.email}
                            touched={touched.email}
                            type="email"
                            labelText="Email" 
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <Input
                            error={errors.password}
                            touched={touched.password}
                            labelText="Create Password" 
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <Input
                            error={errors.confirm}
                            touched={touched.confirm}
                            labelText="Confirm Password" 
                            type="password"
                            name="confirm"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirm}
                        />
                        <Button  disabled={isSubmitting} text="Sign Up" type="submit"/>
                    </form>
                )}
            </Formik>
            <div className="form-wrapper-footer">
                <div className="form-wrapper-description">Already have an account? <span>Log In</span></div>
                <div className="form-wrapper-description">Review privacy and disclosures <span>here</span></div>
            </div>
        </div>
    )
}

export default FormWrapper
