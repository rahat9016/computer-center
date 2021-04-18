import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logo from '../../../images/logo2.png'
import './login.css'
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  
    const handleGoogleSignIn = () => {
      var googleProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(googleProvider)
      .then(result => {
        const { displayName, email,photoURL } = result.user;
        const signedInUser = { displayName, email, photoURL }
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        console.log(error.message);
      });
    }
    
  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        console.log(error)
      });
  }

    return (
        <div className="login-container">
        <div className="align-items-center" >
            <div className="text-center my-5">
                <img src={logo}alt=""/>
            </div>
          <div className="shadow p-5 m-auto">
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">Forgot your password?</label>
            </div>
            <div className="d-flex justify-content-center cursor-pointer"onClick={handleGoogleSignIn}>
                <div className="from-group mt-5 d-flex align-items-center bg-danger w-50 rounded text-white justify-content-center py-2">
                    <i class="fab fa-google me-3 fs-2"></i>  
                    <h6 className="text-white mb-0 ms-1 ">Google Sign in</h6>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    );
};

export default Login;