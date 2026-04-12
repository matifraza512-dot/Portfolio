import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function BlogPost() {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/posts/"+id+"/").then(res => setPost(res.data))
  }, [id])

  if (!post) return <p style={{padding:"2rem"}}>Loading...</p>

  return (
    <div style={{padding:"2rem"}}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}