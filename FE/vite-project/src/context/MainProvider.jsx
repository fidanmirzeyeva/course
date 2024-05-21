import React, { createContext, useState } from 'react'



export const MainContext = createContext()
function MainProvider({children}) {
        const [basket, setBasket] = useState([])
    function addBasket(item) {
        setBasket([...basket,item])

        
    }
  return (
   <>
   <MainContext.Provider value={{addBasket,basket,setBasket}}>{children}</MainContext.Provider>

   </>
  )
}

export default MainProvider
