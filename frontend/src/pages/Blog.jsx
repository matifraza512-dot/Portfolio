import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/posts/").then(res => setPosts(res.data))
  }, [])

  return (
    <div style={{padding:"2rem"}}>
      <h1>Blog</h1>
      {posts.length === 0 && <p>No posts yet.</p>}
      {posts.map(p => (
        <div key={p.id} style={{border:"1px solid #ccc",padding:"1rem",marginBottom:"1rem"}}>
          <h3><Link to={"/blog/"+p.id}>{p.title}</Link></h3>
          <p>{p.excerpt}</p>
        </div>
      ))}
    </div>
  )
}