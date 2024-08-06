import { ref } from 'vue';
import { auth } from '../firebase/config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const error = ref(null);
const isPending = ref(false);

const signup = async (email, password, name) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!res) {
      throw new Error('Could not complete the signup');
    }
    console.log(res.user);
    // const user = projectAuth.currentUser;
    // await user.updateProfile({ displayName: name });

  } catch (err) {
    error.value = err.message;
    isPending.value = false;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
