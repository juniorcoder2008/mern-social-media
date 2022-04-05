import React, { useEffect, useState } from 'react';

import Auth from './components/Auth';
import Content from './components/Content';

const App = () => {

  const [userID, setUserID] = useState();

  useEffect(() => {
    if(localStorage.getItem('userID')) {
      setUserID(localStorage.getItem('userID'));
    }
  }, [])

  return (
    <div>
      {userID ? <Content id={userID} /> : <Auth userID={userID} setUserID={setUserID} />}
    </div>
  )
}

export default App