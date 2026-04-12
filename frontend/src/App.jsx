import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token")
  return token ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}