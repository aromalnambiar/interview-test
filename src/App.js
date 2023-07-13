import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/screen/Main';

function App() {


  return (
    <div >
     <p className='text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mt-5 text-transparent bg-clip-text text-5xl'>
          Appointment Details
     </p>
     <Main/>
    </div>
  );
}

export default App;
