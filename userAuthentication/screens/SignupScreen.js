import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const authCtx = useContext(AuthContext)
  async function SignUpHandler({ email, password }) {
    setIsAuthenticating(true)
    try {
      const token = await createUser(email, password)
      authCtx.authenticate(token)
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user'
      )
      setIsAuthenticating(false)
    }


  }

  if (isAuthenticating) {
    return <LoadingOverlay message="creating user" />
  }
  return <AuthContent onAuthenticate={SignUpHandler} />;
}

export default SignupScreen;
