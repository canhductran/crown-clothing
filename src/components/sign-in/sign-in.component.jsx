import React, { useState } from 'react';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = userCredentials;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        });
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your existing email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label='Email' name='email' type='email' value={email} onChange={handleChange} required />
                <FormInput label='Password' name='password' type='password' value={password} onChange={handleChange} required />

                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
