import React from 'react'
import './Sect3.scss'
function Sect3() {
  return (
    <>
    <div className="sect3">
        <div className="sect3_hero">
          <div className="sect3_hero_text">
          <h3>Register now and get a discount 50% discount until 1 January</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
            <button>REGISTER NOW</button>
          </div>
        </div>
        <div className="sect3_hero2">
           <div className="sect3_hero2_text">
           <h3>Search for your course</h3>
           </div>
           <div className="sect3_hero2_input">
            <input type="text"  placeholder='Course Name'/>
            <input type="text" placeholder='Category' />
            <input type="text" placeholder='Degree' />
            <button>Search Course</button>
           </div>
            
        </div>
    </div>
    </>
  )
}

export default Sect3
