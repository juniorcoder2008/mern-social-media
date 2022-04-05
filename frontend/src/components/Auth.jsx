import React, { useState } from 'react';

import Login from './Login';
import Register from './Register';

const Auth = ({userID, setUserID}) => {

  const [authMode, setAuthMode] = useState('Register');

  return (
    <div>
     {authMode === 'Register' ? <Login userID={userID} setUserID={setUserID} authMode={authMode} setAuthMode={setAuthMode} /> : <Register authMode={authMode} setAuthMode={setAuthMode} />}
    </div>
  )
}

export default Auth