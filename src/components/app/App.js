import Main from '../login/main/Main'
import ToDo from '../toDo/toDo.js/ToDo'
import PrivateRoute from '../hos/PrivateRoute'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.sass'


const App = () =>{
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path='/ToDo-React-API/' element={<Main/>}/>
              <Route path='/ToDo-React-API/todo' element=
                                        {<PrivateRoute>
                                          <ToDo/>
                                        </PrivateRoute>}/>
              
          </Routes>
        </BrowserRouter>
      </div>   
   )
}

export default App;
