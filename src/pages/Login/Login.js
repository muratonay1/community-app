// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // CSS dosyasını import edin

const Login = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const navigate = useNavigate();

     const handleLogin = () => {
          if (username !== '' && password !== '') {
               // Kullanıcı başarıyla giriş yaptığında ana sayfaya yönlendir
               navigate('/main');
          } else {
               alert('Kullanıcı adı ve parola boş olamaz!');
          }
     };

     return (
          <div className="login-container">
               <h2>Login</h2>
               <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
               <br />
               <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
               <br />
               <button onClick={handleLogin}>Login</button>
          </div>
     );
};

export default Login;
