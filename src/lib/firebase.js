// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// using the lite version because app doesn't need real-time features
import { getFirestore } from "firebase/firestore/lite";
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

export async function loginUser() {}

export async function signupUser() {}

export function useAuthUser() {}

export async function checkIfUsernameTaken() {}

export async function logOut() {}

export async function createUser() {}

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
