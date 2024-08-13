import { useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './layouts/Home';  // Correct the import statement

function App() {
    return (
        <>
            {/* <Login/>
            <SignUp/> */}
            <Home />  {/* Use the corrected component name */}
        </>
    );
}

export default App;
