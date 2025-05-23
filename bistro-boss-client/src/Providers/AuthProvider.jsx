import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Components/Hooks/useAxiosPublic";



export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth,provider);
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser --> ", currentUser);
      const user = {
        email: currentUser?.email,
      }
      if(currentUser){
        axiosPublic.post("/jwt",user)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem("access-token", res.data.token)
            setLoading(false);
          }
        })
      } 
      else{
      localStorage.removeItem("access-token")
      setLoading(false);
      }
    });
    return () => {
      return unSubscribe();
    };
  }, [auth]);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    updateUser,
    loginWithGoogle
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
