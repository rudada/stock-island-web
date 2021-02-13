import React, { Component } from 'react';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig"
import {
    FirebaseAuthProvider
} from '@react-firebase/auth';

import LogIn from "../../components/auth/LogIn";

export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = { email: "", pw: "" };
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    
    onGoogleLogin = () => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider)
                .then((result) => console.log(result))
                .catch((err) => {
                    console.log(err)
                });
            //result의 isNewUser가 true이면 회원가입 진행
    }

    onEmailLogin = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pw)
        .then((result) => console.log(result))
        .catch((err) => {
            console.log(err)
        });
    }
    
    onChangeEmail = (event) => {
        this.state.email = event.target.value;
    }

    onChangePassword = (event) => {
        this.state.pw = event.target.value;
    }
    

    render() {
        return (
            <div className="content_login">

            <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
                <LogIn
                    onGoogleLogin={this.onGoogleLogin}
                    onEmailLogin={this.onEmailLogin}
                    onChangeEmail={this.onChangeEmail}
                    onChangePassword={this.onChangePassword}
                >
                </LogIn>
            </FirebaseAuthProvider>
            </div>
        )
    }
}