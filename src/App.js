import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImagesAPI from './routes/images';
import RentRollAPI from './routes/rentroll';
import WaitListAPI from './routes/waitlist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<RentRollAPI/>} />
        <Route path="/images" element= {<ImagesAPI/>} />
        <Route path="/waitlist" element= {<WaitListAPI/>} />
        <Route path="/rentroll" element= {<RentRollAPI/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;