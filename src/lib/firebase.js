// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// using the lite version because app doesn't need real-time features
import {
  getFirestore,
  doc,
  collection,
  query,
  where,
  setDoc,
  getDocs,
  getDoc,
} from "firebase/firestore/lite";
import { useEffect } from "react";
import useStore from "store";
import shallow from "zustand/shallow";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg0VLEDtUwW47DhX37HssAtTmQGms8B1s",
  authDomain: "reddit-clone-21bdd.firebaseapp.com",
  projectId: "reddit-clone-21bdd",
  storageBucket: "reddit-clone-21bdd.appspot.com",
  messagingSenderId: "1050823512558",
  appId: "1:1050823512558:web:45d654499e795bee183eff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function signupUser({ username, email, password }) {
  const userCreds = await createUserWithEmailAndPassword(auth, email, password);
  await createUser({
    user: userCreds.user,
    username,
  });
}

export async function createUser({ user, username }) {
  const userDoc = doc(db, "users", user.uid);
  await setDoc(userDoc, {
    uid: user.uid,
    username,
    email: user.email,
  });
}

export async function checkIfUsernameTaken(username) {
  const col = collection(db, "users");
  const q = query(col, where("username", "==", username));
  const { empty } = await getDocs(q);
  return empty || "Username taken";
}

export function useAuthUser() {
  const [setUser, resetUser] = useStore(
    (state) => [state.setUser, state.resetUser],
    shallow
  );

  useEffect(() => {
    async function getUser(user) {
      if (!user) {
        resetUser();
      } else {
        // get user by uid from firestore
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUser(userDoc.data());
        } else {
          resetUser();
        }
      }
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      getUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [setUser, resetUser]);
}

export async function logOut() {
  return await signOut(auth);
}

export async function loginUser() {}

export async function createPost() {}

export async function getDocuments() {}

export async function getPost() {}

export async function getPosts() {}

export async function getPostsByUsername() {}

export async function getPostsByCategory() {}

export async function deletePost() {}

export async function createComment() {}

export async function getCommentsByPostId() {}

export async function deleteComment() {}

export async function addView() {}

export async function getCommentCount() {}

export async function toggleVote() {}
