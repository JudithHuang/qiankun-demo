import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
