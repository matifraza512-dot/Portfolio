import { useEffect, useState } from "react"
import axios from "axios"

export default function Dashboard() {
  const [contacts, setContacts] = useState([])
  const token = localStorage.getItem("token")

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/contact/list/", {
      headers: { Authorization: "Bearer "+token }
    }).then(res => setContacts(res.data))
  }, [])

  return (
    <div style={{padding:"2rem"}}>
      <h1>Admin Dashboard</h1>
      <h2>Contact Messages</h2>
      {contacts.length === 0 && <p>No messages yet.</p>}
      {contacts.map(c => (
        <div key={c.id} style={{border:"1px solid #ccc",padding:"1rem",marginBottom:"1rem"}}>
          <p><b>Name:</b> {c.name}</p>
          <p><b>Email:</b> {c.email}</p>
          <p><b>Project:</b> {c.project_type}</p>
          <p><b>Message:</b> {c.message}</p>
          <p><b>Date:</b> {new Date(c.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}