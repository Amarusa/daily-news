import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
 

  
  
} from "firebase/auth";
import { auth } from "../config/firbase";


const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.uid,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false)
    });

    return () => unsubscribe;
  }, []);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = async () => {
    setUser(null)
     await signOut(auth)
  }
  const resetPassword =  (email) => {
    return sendPasswordResetEmail(auth, email)

  }

  function updateEmail(email) {
    return user.updateEmail(auth,email)
  }
  function updatePassword(password) {
    return user.updatePassword(auth, password)
  }
  return (
    <AuthContext.Provider value={{ user, login, signup, logout, resetPassword, updateEmail, updatePassword }}>
      {loading ? null : children}
      </AuthContext.Provider>
  );
};
