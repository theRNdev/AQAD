import auth from '@react-native-firebase/auth';

// This funtion use for create user on firebase
export const createUser = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      resolve('User account created & signed in!');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        reject('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        reject('That email address is invalid!');
      } else {
        console.error(error);
      }
    }
  });
};

// This function use for signin user
export const SignIn = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      resolve('User account signed in!');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        reject('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        reject('That email address is invalid!');
      } else if (error.code === 'auth/wrong-password') {
        reject('The password is invalid or the user does not have a password');
      } else {
        reject('That email address is invalid!');
        console.error(error);
      }
    }
  });
};

// // This funtion for sign out user
export const signOutUser = async () => {
  new Promise(async (resolve, reject) => {
    try {
      await auth().signOut();
      resolve('User signed out!');
    } catch (error) {
      reject('Error signing out');
    }
  });
};

// This funtion for delete user
export const reauthenticateAndDeleteUser = async (email, password) => {
  try {
    const user = auth().currentUser;
    if (user) {
      // Reauthenticate the user
      const credential = auth.EmailAuthProvider.credential(email, password);
      await user.reauthenticateWithCredential(credential);
      // Delete the user
      await user.delete();
      console.log('User account reauthenticated and deleted!');
      return {success: true};
    } else {
      console.log('No user is signed in!');
      return {success: false, message: 'No user is signed in!'};
    }
  } catch (error) {
    if (error.code === 'auth/requires-recent-login') {
      console.log(
        'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
      );
    } else {
      console.error('Error reauthenticating and deleting user:', error);
    }
    return {success: false, error};
  }
};
