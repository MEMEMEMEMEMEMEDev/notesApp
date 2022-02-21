import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
  return (
    <div className='auth'>
      <div className='auth-container'>
        <Switch>
          <Route
            path='/auth/login'
            component={ LoginScreen }
            exact
          />
          <Route 
            path='/auth/register'
            component={ RegisterScreen  }
            exact
          />

          <Redirect 
           to='/auth/register'
          />
        </Switch>
      </div>
    </div>
  )
};
