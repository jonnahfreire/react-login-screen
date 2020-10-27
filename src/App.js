import React from 'react';
import './style/global.css';

import { TextInput } from './components/TextInput/';
import ReactLogo from './react-logo.png';

export const App = () => {

    return (
        <div className="App">
            <header>
                <h1>
                    <img style={{height: 95}} src={ReactLogo} alt="Logo React"/>
                </h1>
            </header>

            <form action="/">
            	<h1>LOGIN</h1>
                
	            <TextInput type="text" placeholder="Username"/>
	            <TextInput type="password" placeholder="Password"/>
           		
           		<div className="pass-recover">
					<a href="/">Forgot your password</a>
           		</div>

            	<div className="login-btn">
            		<button>LOGIN</button>
            	</div>

            	<div className="signup-link">
            		<a href="/">Don't have an account? <span>Sign up</span></a>
            	</div>
            </form>
        </div>
    );
}

