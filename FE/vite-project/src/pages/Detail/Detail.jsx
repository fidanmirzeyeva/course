import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import './Detail.scss'

function Detail() {
  const {id} = useParams()
  useEffect(() => {
    showDetail()
   
  }, [])
  const [detail, setdetail] = useState([])
  async function showDetail() {
    const res = await fetch(`http://localhost:7000/fff/${id}`)
    const data = await res.json()
    setdetail(data)
  }
  
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Detail</title>     
      </Helmet>
  </HelmetProvider>
  <div className="detail">
    <div className="detail_img">
      <img src={detail.image} alt="" />
    </div>
    <div className="detail_text">
      <h3>{detail.name}</h3>
      <p>{detail.description}</p>
      <span>${detail.price}</span>
    </div>
  </div>




    </>
  )
}

export default Detail
