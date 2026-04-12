import { useState } from "react"
import axios from "axios"

export default function Contact() {
  const [form, setForm] = useState({name:"",email:"",project:"",message:""})
  const [sent, setSent] = useState(false)

  const submit = async () => {
    await axios.post("http://127.0.0.1:8000/api/contact/", form)
    setSent(true)
  }

  if (sent) return <div style={{padding:"2rem"}}><h2>Message sent!</h2></div>

  return (
    <div style={{padding:"2rem"}}>
      <h1>Contact Me</h1>
      <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{display:"block",marginBottom:"0.5rem",width:"100%",padding:"0.5rem"}} />
      <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={{display:"block",marginBottom:"0.5rem",width:"100%",padding:"0.5rem"}} />
      <input placeholder="Project Type" value={form.project} onChange={e=>setForm({...form,project:e.target.value})} style={{display:"block",marginBottom:"0.5rem",width:"100%",padding:"0.5rem"}} />
      <textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{display:"block",marginBottom:"0.5rem",width:"100%",padding:"0.5rem",height:"150px"}} />
      <button onClick={submit} style={{padding:"0.5rem 2rem",background:"#111",color:"#fff",border:"none",cursor:"pointer"}}>Send</button>
    </div>
  )
}