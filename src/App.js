import Navbar from './Navbar';
import './style/main.css';
import React from "react";


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./pages/About";
import Dest from "./pages/Destination";
import Contact from "./pages/Contact";
import Home from "./Home";





function App() {
  return (
    <BrowserRouter>
    <div className="App box-border p-0 m-0">
    <Navbar/>
    < Routes>
    <Route index element={<Home /> } />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Destination" element={<Dest />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </ Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
