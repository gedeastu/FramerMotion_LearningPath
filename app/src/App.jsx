import './App.css'
import Home from './pages/Home'
import { Switch,Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Switch>
        <Route path='/' element={<Home/>}/>
      </Switch>
    </>
  )
}

export default App
