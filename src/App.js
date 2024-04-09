import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import AnotherPage from './ProfilePage'; // Create AnotherPage component for the new page
import FinalPage from './SelectorPage';
import NextPage from './HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/another-page" element={<AnotherPage />} />
        <Route path='/final-page'   element={<FinalPage/>}  />
        <Route path='/next-page'   element={<NextPage/>}  />
      </Routes>
    </Router>
  );
}

export default App;
