import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccessingAPI from './api';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<AccessingAPI/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;