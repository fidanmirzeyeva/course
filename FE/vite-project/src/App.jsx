import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Basket from './pages/Basket/Basket'
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import Add from './pages/Add/Add';
import MainProvider, { MainContext } from './context/MainProvider';
import { useContext } from 'react';
function App() {


  return (
    <>
    <MainProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>}/>
          <Route  path='/basket' element={<Basket />}/>
          <Route  path='/detail/:id' element={<Detail/>}/>
          <Route  path='/admin' element={<AdminPanel/>}/>
          <Route  path='/add' element={<Add/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
      
    </>
  )
}

export default App
