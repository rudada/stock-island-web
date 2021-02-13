import React, { Component } from 'react';
import SignUp from '../../components/auth/SignUp'

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig"
import {
    FirebaseAuthProvider,
} from '@react-firebase/auth';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", pw: "" };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onCreateAccount = this.onCreateAccount.bind(this);
    }

    onChangeName = (event) => {
        this.state.name = event.target.value;
    }
    onChangeEmail = (event) => {
        this.state.email = event.target.value;
    }
    onChangePassword = (event) => {
        this.state.pw = event.target.value;
    }
    onCreateAccount = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pw)
            .then((result) => console.log(result))
            .catch((err) => {
                console.log(err);
                //이미 가입된 아이디 - code:"auth/email-already-in-use"
            })
    }

    render() {
        return (
            <div className="content_signup">
                <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
                    <SignUp
                        onCreateAccount={this.onCreateAccount}
                        onChangeName={this.onChangeName}
                        onChangeEmail={this.onChangeEmail}
                        onChangePassword={this.onChangePassword}
                    >
                    </SignUp>
                </FirebaseAuthProvider>
            </div>
        );
    }
}

