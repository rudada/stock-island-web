import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }

    successLogin = (res) => {
        console.log(res);
    }

    failLogin = (err) => {
        console.error(err);
    }

    render() {
        return (
            <div className="content_login">
                <GoogleLogin
                    clientId='155500131224-moj66toldrspr6gq339qrofu0eu4bv1f.apps.googleusercontent.com'
                    buttonText="Google"
                    onSuccess={this.successLogin}
                    onFailure={this.failLogin}
                >

                </GoogleLogin>
            </div>
        )
    }

}

export default Login;