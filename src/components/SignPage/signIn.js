import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SinIn() {
  const navigator = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sinInValidation, setSinInValidation] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const validationHandler = () => {
    let emailBool = false;
    let passwordBool = false;
    let userList = localStorage.getItem('user_list') ? JSON.parse(localStorage.getItem('user_list')) :  [];
    userList.map(user => {
      if (user.Email === email) {
        emailBool = true;
      } else {
        setSinInValidation(true);
        setTimeout(function () {
          setSinInValidation(false);
        }, 2000);
      }
      if (user.Password === password) {
        passwordBool = true;
      } else {
        setSinInValidation(true);
        setTimeout(function () {
          setSinInValidation(false);
        }, 2000);
      }
      return true;
    })
    const currentUser = userList.find(user => user.Email === email);
    console.log('userList',userList)
    console.log('currentUser',currentUser, email)
    if(currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    if (emailBool === true && passwordBool === true) {
      navigator('/');
    }
  };

  return (
    <div>
      <header style={{ height: '100vh' }} className="showcase">
        <Link to="/">
          <div className="logo">
            <div
              style={{
                color: '#999',
                fontSize: '1.6rem',
                fontWeight: 'bold',
                position: 'relative',
                top: '18px',
                left: '16px',
                width: '90%',
              }}
            >
              M<span style={{ color: '#fff' }}>ovies</span>
            </div>
          </div>
        </Link>

        <div className="showcase-content">
          <div className="formm">
            <form
              onSubmit={(e) => {
                onSubmit(e);
              }}
            >
              <h1 style={{ paddingTop: '1rem' }}>Sign In</h1>
              <div className="info">
                <input
                  className="email"
                  type="email"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <br />
                <input
                  className="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <p
                  class="nameAlert validation"
                  style={
                    sinInValidation ? { display: 'block' } : { display: 'none' }
                  }
                >
                  Enter a correct details
                </p>
              </div>
            </form>
            <div className="btn">
              <button
                className="btn-primary"
                type="submit"
                onClick={() => {
                  validationHandler();
                }}
              >
                Sign In
              </button>
            </div>
          </div>

          <div className="signup">
            <p>New to Movies ?</p>
            <Link style={{color:'white'}} to="/SinUpPage">Sign up now</Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default SinIn;
