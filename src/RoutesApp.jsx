import { Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './components';

export default function RoutesApp() {
  return(
  <Routes>
    <Route path="/" element={<Home/>}/>

    <Route path="/*" element={ <App/> }/>
  </Routes>
  )
}