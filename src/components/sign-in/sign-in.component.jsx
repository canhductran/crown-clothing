import React from 'react';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.util';

import './sign-in.styles.scss';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    };

    handleSubmit = event => {
        event.preventDefault();
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your existing email and password</span>
            
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='Email' name='email' type='email' value={this.state.email} onChange={this.handleChange} required />
                    <FormInput label='Password' name='password' type='password' value={this.state.password} onChange={this.handleChange} required />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;