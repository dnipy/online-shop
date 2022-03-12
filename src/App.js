import {Route,Routes} from 'react-router-dom'

import Home from './pages/home'
import Admin from './pages/admin'
import Shop from './pages/shop'
import For0For from './pages/404'
import Categories from './pages/categories'

function App() {
  return (
    <div>
        <Routes>
          
          <Route path='/' element={<Home/>} />
          <Route path='/admin' element={<Admin/>} />
          
          <Route path='/shop' >
            <Route index element={<Shop/>}/>
            <Route path=':id' />
          </Route>

          <Route path='/categories'>
            <Route index element={<Categories/>}/>
            <Route path=':name' />
          </Route>

          <Route path='*' element={<For0For/>} />
        </Routes>
    </div>
  );
}

export default App;
