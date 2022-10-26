import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <link rel="icon" href="./Assets/img/brands/android-logo-12384.png" />
    <title>ok</title>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/News" element={<News />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contacts" element={<Contacts />}></Route>
      <Route path="/Signin" element={<Signin />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

function News() {
  return <h1>News</h1>;
}

function Profile() {
  return <h1>Profile</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contacts() {
  return <h1>Contacts</h1>;
}

function Signin() {
  return <h1>Signin</h1>;
}
