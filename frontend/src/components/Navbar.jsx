import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <nav style={{display:"flex",gap:"1rem",padding:"1rem",background:"#111",color:"#fff"}}>
      <Link style={{color:"#fff"}} to="/">Home</Link>
      <Link style={{color:"#fff"}} to="/projects">Projects</Link>
      <Link style={{color:"#fff"}} to="/blog">Blog</Link>
      <Link style={{color:"#fff"}} to="/contact">Contact</Link>
      {token ? (
        <>
          <Link style={{color:"#fff"}} to="/dashboard">Dashboard</Link>
          <button onClick={logout} style={{color:"#fff",background:"none",border:"none",cursor:"pointer"}}>Logout</button>
        </>
      ) : (
        <Link style={{color:"#fff"}} to="/login">Admin</Link>
      )}
    </nav>
  )
}