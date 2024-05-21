import React, { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'

function Basket() {
  const {basket} = useContext(MainContext)

  return (
    <>
   <div className="sect2_hero_cards">
                    {basket.map((x)=>
                    <div className="card" key={x._id}>
                        <img src={x.image} alt=""  />
                        <h3>{x.name}</h3>
                        <p>{x.description}</p>
                       <span>{x.price}</span>
                        <button onClick={()=>addBasket(x)}>Add Basket</button>
                       

                    </div>
                    )}
                </div>
    </>
  )
}

export default Basket
