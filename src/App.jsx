import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Firstpage from "./Components/Firstpage";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from './Components/Work'
import Contact from "./Components/Contact";
import Notes from "./Components/Notes";
import SavedNotesPage from "./Components/SavedNotesPage";
import ViewNotePage from "./Components/ViewNotePage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Firstpage />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />

          {/* 🔐 Protected Routes */}
          <Route
            path="notes"
            element={
              <ProtectedRoute>
                <Notes />
              </ProtectedRoute>
            }
          />
          <Route
            path="saved"
            element={
              <ProtectedRoute>
                <SavedNotesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="view-note/:id"
            element={
              <ProtectedRoute>
                <ViewNotePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
