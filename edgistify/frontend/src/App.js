import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Contacts from './components/Contacts';
import Chat from './components/Chat';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [contacts] = useState([
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Robert Brown' }
  ]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <div className="app-container">
        {!user ? (
          <Routes>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          </Routes>
        ) : (
          <div className="chat-app">
            <Contacts contacts={contacts} selectContact={setSelectedContact} />
            {selectedContact && <Chat contact={selectedContact} />}
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
