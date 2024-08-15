import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './layouts/Home';  // Correct the import statement

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
