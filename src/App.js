// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import HomePage from './pages/Home';
// import Page1 from './pages/Page1';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Route exact path="/" component={HomePage} />
//         <Route path="/page2" component={Page1} />
//         {/* Add more routes for additional pages */}
//       </div>
//     </Router>
//   );
// }

// export default App;





// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Bday from './pages/Bday';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/192837465" element={<Page2 />} />
        <Route path="/bday" element={<Bday />} />



      </Routes>
    </BrowserRouter>
  );
};

export default App;
