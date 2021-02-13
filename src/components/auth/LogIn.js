import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

LogIn.propTypes = {

};

function LogIn(props) {
    const {onGoogleLogin, onEmailLogin, onChangeEmail, onChangePassword} = props;
    return (
        <div className="login-wrapper">
            <h2> 로그인 </h2>

            <div className="login-form">
                <div className="social-group">
                    <button className="social"><i className="fab fa-facebook-f"></i></button>
                    <button className="social" onClick={onGoogleLogin}><i className="fab fa-google-plus-g"></i></button>
                    <button className="social"><i className="fab fa-linkedin-in"></i></button>
                </div>
                <span>또는 이메일로 로그인</span>
                <div className="email-group">
                    <input type="text" className="input" placeholder="Email" onKeyUp={onChangeEmail}></input>
                    <input type="password" className="input" placeholder="Password" onKeyUp={onChangePassword}></input>
                    <button className="button" onClick={onEmailLogin}>로그인</button>
                </div>

                <div className="hr"></div>
            </div>

            <span><a className="signup" href="/signup">회원가입</a></span>


        </div>
    );
}

export default LogIn;