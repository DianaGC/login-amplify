import React from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from "react-router-dom"

Amplify.configure(awsExports)

function Login() {
    const navigate = useNavigate()
 return(
    <Authenticator>
      {({ signOut, user }) => (
        <main>
         
          {navigate('/digimons')}
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
 )
}

//6.
export default Login