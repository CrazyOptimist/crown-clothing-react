export const BACKEND_URL = process.env.NODE_ENV === 'production'
  ? "https://crown-crazy-backend.herokuapp.com"
  : "http://localhost:5000";

export const STRIPE_PUBLIC_KEY = 'pk_test_XaU2ol72dMsCHNRu3LsS2ZT3';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyARRyjQAxMtuliuEQXXzNXC7tXPE_m3svw",
  authDomain: "crown-db-58b3b.firebaseapp.com",
  projectId: "crown-db-58b3b",
  storageBucket: "crown-db-58b3b.appspot.com",
  messagingSenderId: "13583223672",
  appId: "1:13583223672:web:33d5d3780e0f0e3e12568d",
  measurementId: "G-XKYEHZQCXJ"
};


