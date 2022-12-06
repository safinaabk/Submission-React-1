import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import HomePage from "./pages/HomePage";
import DetailNotePage from "./pages/DetailNotePage";
import AddNotePage from "./pages/AddNotePage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">
            {" "}
            <BiHome /> Home
          </Link>
        </h1>
        <nav className="navigation">
          <ul>
            <li>
              {" "}
              <h1>Aplikasi Catatan</h1>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addnote" element={<AddNotePage />} />
          <Route path="/notes/:id" element={<DetailNotePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
