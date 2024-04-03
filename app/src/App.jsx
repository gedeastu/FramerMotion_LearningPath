import './App.css'

//Import Layout Routing
import RootLayout from './layouts/RootLayout'
import HomeLayout from './layouts/HomeLayout'
import AboutLayout from './layouts/AboutLayout'

//Import Page Routing
import Home from './pages/home/Home'
import HomeDetails from './pages/home/HomeDetails'
import Info from './pages/Info'
import FAQ from './pages/about/FAQ'
import Contact from './pages/about/contact'

//Import Error Routing
import Error404 from './pages/404'

// Import Create Browser Router
import {
  createBrowserRouter, 
  Routes, 
  Route,
  createRoutesFromElements,
  RouterProvider
} 
from 'react-router-dom'

//Import Loader Data Routing
import { FetchJSON } from './components/cardList'
import { HomeDetailsLoader } from './pages/home/HomeDetails'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} loader={HomeDetailsLoader}>
      {/* Home Routing */}
      <Route path='/' element={<HomeLayout/>}>
      <Route index element={<Home/>} loader={FetchJSON}/>
      <Route path='/:id' element={<HomeDetails/>} loader={HomeDetailsLoader}/>
      </Route>

      {/* Info Routing */}
      <Route path='info' element={<Info/>}/>

      {/* About Layout Routing */}
      <Route path='about' element={<AboutLayout/>}>
        <Route path='faq' element={<FAQ/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>

      {/* ERROR 404 Page */}
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
