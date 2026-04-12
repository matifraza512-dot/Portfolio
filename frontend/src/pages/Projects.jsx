import { useEffect, useState } from "react"
import axios from "axios"

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/projects/").then(res => setProjects(res.data))
  }, [])

  return (
    <div style={{padding:"2rem"}}>
      <h1>Projects</h1>
      {projects.length === 0 && <p>No projects yet.</p>}
      {projects.map(p => (
        <div key={p.id} style={{border:"1px solid #ccc",padding:"1rem",marginBottom:"1rem"}}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p><b>Stack:</b> {p.tech_stack}</p>
          {p.github_url && <a href={p.github_url}>GitHub</a>}
          {p.live_url && <a href={p.live_url} style={{marginLeft:"1rem"}}>Live</a>}
        </div>
      ))}
    </div>
  )
}