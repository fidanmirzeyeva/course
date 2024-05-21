import React, { useEffect, useState } from 'react'
import './AdminPanel.scss'
function AdminPanel() {
  const [admin, setAdmin] = useState([])
  useEffect(() => {
   showAdmin()
  }, [])
  async function showAdmin() {
    const  res = await fetch("http://localhost:7000/fff")
    const data = await res.json()
    setAdmin(data)
    
  }
  async function  deleteAdmin(id) {
    const res = await fetch ("http://localhost:7000/fff/"+id,{method:"delete"})
    const data = await res.json()
    showAdmin()
    
  }
  return (
    <>
    <table>
      <thead>
      <tr>
        <th>Image</th>
        <th>name</th>
        <th>description</th>
        <th>price</th>
        <th>Options</th>
      </tr>
      </thead>


      <tbody>
        {admin.map((x)=>
        <tr key={x._id}>
         <td><img src={x.image} alt="" /></td>
          <td>{x.name}</td>
          <td>{x.description}</td>
          <td>{x.price}</td>
          <td>
            <button onClick={()=>deleteAdmin(x._id)}>X</button>
            </td>
        </tr>
        )}

      </tbody>
    </table>
    </>
  )
}

export default AdminPanel
