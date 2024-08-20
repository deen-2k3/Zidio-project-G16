import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './layouts/Home';
import JobHost from './pages/JobHost';
import JobApply from './pages/JobApply';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/jobhost' element={<JobHost />} />
                <Route path='jobapply'element={<JobApply/>}/>
            </Routes>
        </BrowserRouter>
        
       
    );
}

export default App;


// export default App;
// import React from 'react';
// import Jobcard from './components/Jobcard';

// export default function App() {
//   const job = {
//     imgurl: 'https://via.placeholder.com/150',
//     companyName: 'Tech Corp',
//     role: 'Software Engineer',
//     duration: '6 months',
//     ctc: '10 LPA'
//   };

//   return (
//     <div>
//       <Jobcard job={job} />
//     </div>
//   );
// }
