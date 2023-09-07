import './App.css'
import Home from './pages/Home'
import Info from './pages/Info'
import AboutLayout from './layouts/AboutLayout'
import FAQ from './pages/about/FAQ'
import Contact from './pages/about/contact'
import Error404 from './pages/404'
import RootLayout from './layouts/RootLayout'
import {
  createBrowserRouter, 
  Routes, 
  Route,
  createRoutesFromElements,
  RouterProvider
} 
from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='info' element={<Info/>}/>
      <Route path='about' element={<AboutLayout/>}>
        <Route path='faq' element={<FAQ/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
      <Route path='*' element={<Error404/>}/>
    </Route>
  ),
);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
};

export default App;
