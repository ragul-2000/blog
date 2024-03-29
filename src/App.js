import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Write from './pages/write/Write';
import Single from './pages/single/Single';
import Settings from './pages/settings/Settings'


function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/register" element={
        user ?<Home/> : <Register/>} />
        <Route path="/login" element=
        {user ?<Home/> : <Login/>} />
        <Route path="/write" element=
        {user ?<Write/> : <Register/>} />
        <Route path="/post/:postId"  element={<Single/>} />
        <Route path="/Settings" element={user ? <Settings/> : <Register/>} />
        <Route path = "Single" element = {<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
