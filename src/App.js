import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/screen/Main';

function App() {


  return (
    <div >
     <p className='text-center text-2xl mt-10'>
          Clinical Website
     </p>
     <Main/>
    </div>
  );
}

export default App;
