  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { 
     getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword, signOut } from 'firebase/auth' ;
  import {
     addDoc,
      collection,
      getFirestore } from 'firebase/firestore';
  import { toast } from "react-toastify";


  const firebaseConfig = {
    apiKey: "AIzaSyBwY-O7eDV0olcwLVQ6wClWBH4nyOOyWJI",
    authDomain: "netflix-clone-958d2.firebaseapp.com",
    projectId: "netflix-clone-958d2",
    storageBucket: "netflix-clone-958d2.appspot.com",
    messagingSenderId: "301328805966",
    appId: "1:301328805966:web:04de238946c8a48c48d31f",
    measurementId: "G-18PB4E8W4L"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const signup = async (name ,email,password)=>{
      
    try {
      const res = await createUserWithEmailAndPassword(auth,email,password);
      const user = res.user;
      await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email,
      });
      }catch(error){ 
        console.log(error);
          toast.error(error.code.split('/')[1].split('-').join(""));   

      }
    }
    const login = async (email,password) =>{
      try{
        await signInWithEmailAndPassword(auth,email,password);
      }catch(error){
       console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(""));   
      }
    }

    const logout = ()=>{
      signOut(auth);
    }

    export{ auth ,db,login,signup,logout};