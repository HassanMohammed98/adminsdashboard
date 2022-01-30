import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import MembersList from "./components/MembersList";
import MemberDetail from "./components/MemberDetail";
import BooksList from "./components/BooksList";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Members" element={<MembersList />} />
        <Route path="/Members/:slug" element={<MemberDetail />} />
        <Route path="/Books" element={<BooksList />} />
        <Route path="/Books/:slug" element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;
