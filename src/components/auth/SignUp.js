import React from 'react';
import PropTypes from 'prop-types';
import './SignUp.css';

SignUp.propTypes = {

};

function SignUp(props) {
    const {onCreateAccount, onChangeName, onChangeEmail, onChangePassword} = props;
    return (
        <div className="signup-wrapper">
            <h2> 회원가입 </h2>

            <div className="signup-form">
                <div className="group">
                    <input type="text" className="input" placeholder="Name" onKeyUp={onChangeName}></input>
                    <input type="text" className="input" placeholder="Email" onKeyUp={onChangeEmail}></input>
                    <input type="password" className="input" placeholder="Password" onKeyUp={onChangePassword}></input>
                    <button className="button" onClick={onCreateAccount}>계정 생성하기</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;