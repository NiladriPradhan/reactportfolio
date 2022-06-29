import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home  from './Home';
import About  from './About';
import Contact  from './Contact';
import Service  from './Service';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/service' component={Service} />
      </Routes>
    </>
  );
};
export default App;