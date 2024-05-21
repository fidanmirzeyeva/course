import React, { useEffect, useState } from 'react'
import './Sect2.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'
function Sect2() {
    const {addBasket} = useContext(MainContext)


    const [products, setProducts] = useState([])
    useEffect(() => {
     showProducts()
    }, [])
    async function showProducts() {
        const res = await fetch("http://localhost:7000/fff")
        const data = await res.json()
        setProducts(data)
        
    }
    
  return (
    <>
        <div className="sect2">
            <div className="sect2_hero">
                <div className="sect2_hero_text">
                    <h3>Popular Courses</h3>
                </div>
                <div className="sect2_hero_cards">
                    {products.map((x)=>
                    <div className="card" key={x._id}>
                        <img src={x.image} alt=""  />
                        <div className="card_text">
                            <h3>{x.name}</h3>
                        <p>{x.description}</p>
                       <span>${x.price}</span>
                        <button onClick={()=>addBasket(x)}>Add Basket</button>
                        <button><Link to={`/detail/${x._id}`}>Detail</Link></button></div>

                    </div>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default Sect2
