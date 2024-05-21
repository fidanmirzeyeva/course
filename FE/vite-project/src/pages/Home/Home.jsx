import React from 'react'
import Sect1 from '../../components/Sect1/Sect1'
import Sect2 from '../../components/Sect2/Sect2'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Sect3 from '../../components/Sect3/Sect3';
function Home() {
  return (
    <>
     <HelmetProvider>
      <Helmet>
        <title>Home</title>     
      </Helmet>
  </HelmetProvider>


    <Sect1></Sect1>
    <Sect2></Sect2>
    <Sect3></Sect3>
    </>
  )
}

export default Home
