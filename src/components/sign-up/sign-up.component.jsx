import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {
    const [userSignupDetails, setUserSignupDetails] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = userSignupDetails;

        if (password !== confirmPassword) {
            alert('Passwords do not match');

            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setUserSignupDetails({
            ...userSignupDetails,
            [name]: value
        });
    }

    const { displayName, email, password, confirmPassword } = userSignupDetails;

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required></FormInput>

                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required></FormInput>

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required></FormInput>

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required></FormInput>

                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;
