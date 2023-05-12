import React, { Component } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import SignUp from './routes/Signup';
import Login from './routes/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AuthProvider>
        <div style={{ margin: '2em' }}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
