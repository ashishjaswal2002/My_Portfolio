import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import { BlogPage } from '../pages/BlogPage';
import { HomePage } from '../pages/HomePage';
import { ProjectPage } from '../pages/ProjectPage';
function App() {


  return (

  <>
   <BrowserRouter>

<Routes>

   <Route path='/' element={<HomePage/>}/>
   <Route path='/blog' element={<BlogPage/>}/>
    <Route path='/project' element={<ProjectPage/>}/>
   <Route path="*" element={<Navigate to="/"/>}/>


</Routes>
   
  
   
   
   
   
   </BrowserRouter>
  
   </>

      

  
  )
}

export default App;
