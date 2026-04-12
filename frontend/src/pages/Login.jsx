import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Login() {
  const [creds, setCreds] = useState({username:"",password:""})
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const login = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/token/", creds)
      localStorage.setItem("token", res.data.access)
      navigate("/dashboard")
    } catch {
      setError("Invalid username or password")
    }
  }

  return (
    <div style={{padding:"2rem",maxWidth:"400px",margin:"auto"}}>
      <h1>Admin Login</h1>
      {error && <p style={{color:"red"}}>{error}</p>}
      <input placeholder="Username" value={creds.username} onChange={e=>setCreds({...creds,username:e.target.value})} style={{display:"block",marginBottom:"0.5rem",width:"100%",padding:"0.5rem"}} />
      <input placeholder="Password" type="password" value={creds.password} onChange={e=>setCreds({...creds,password:e.target.value})} style={{display:"block",marginBottom:"0.5rem",width:"100%",padding:"0.5rem"}} />
      <button onClick={login} style={{padding:"0.5rem 2rem",background:"#111",color:"#fff",border:"none",cursor:"pointer"}}>Login</button>
    </div>
  )
}