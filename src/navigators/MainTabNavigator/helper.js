import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    setLoggedIn(false);
  } catch (error) {
    console.error(error);
  }
};

export const displayUsersFirstName = (fullName) => {
  return fullName.split(' ')[0];
}