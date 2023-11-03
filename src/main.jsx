import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import CartProvider from './context/cart.provider.jsx';

const firebaseConfig = {
    apiKey: "AIzaSyBi6UXDQ7qeOUgZ6RBk4vNk4X8G2UxwdX8",
    authDomain: "e-commerce-armybody.firebaseapp.com",
    projectId: "e-commerce-armybody",
    storageBucket: "e-commerce-armybody.appspot.com",
    messagingSenderId: "519880085918",
    appId: "1:519880085918:web:34823c0d4094ce75a4c68f"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
        <App />
    </CartProvider>
)
