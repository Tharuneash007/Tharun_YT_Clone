import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Feed, VideoDetail, SearchFeed, Login, Register} from './components';
import ProtectedRoutes from './Services/ProtectedRoutes';
import { AuthContextProvider } from './context/AuthContext';


const App = () => (

    <AuthContextProvider>
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path ='/' element={<ProtectedRoutes><Feed/></ProtectedRoutes>} />
        <Route path='/video/:id' element={<ProtectedRoutes><VideoDetail/></ProtectedRoutes>} />
        <Route path='/search/:searchTerm' element={<ProtectedRoutes><SearchFeed/></ProtectedRoutes>} />
      </Routes>
    </AuthContextProvider>   

  );

export default App