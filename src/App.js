// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes eklenmeli

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

const App = () => {
    return (
        <Router>
            <div>
                <Routes> {/* Switch yerine Routes kullanılıyor */}
                    <Route path="/" exact element={<Login />} />
                    <Route path="/main" element={<Main />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
