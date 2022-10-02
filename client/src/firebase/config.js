import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAz8dPhF7OiGuRnELXNufhaKEppE0-jvIQ',
	authDomain: 'works-878fb.firebaseapp.com',
	projectId: 'works-878fb',
	storageBucket: 'works-878fb.appspot.com',
	messagingSenderId: '506810441697',
	appId: '1:506810441697:web:8fcfa4773eca8802b6fca0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);
