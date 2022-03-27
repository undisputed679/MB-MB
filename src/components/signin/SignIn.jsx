import React, { Component } from 'react'
import CustomButton from '../custom-button/CoustomButton';
// import { FormInput } from '../formInput/FormInput';

import './signinStyle.scss';
import {auth, signInWithGoogle } from '../../firebase/Firebase';
import FormInput from '../formInput/FormInput';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password)
        }catch(error){
            console.log(error);
        }
        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required />
                    
                    <FormInput
                        name="password"
                        type="password"
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />

                    <div className='buttons'>
                        <CustomButton type="submit"  > Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > 
                        Sign in Google
                        </CustomButton>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}
