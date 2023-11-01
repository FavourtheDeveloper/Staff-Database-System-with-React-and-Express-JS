import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Createnew from './pages/CreateNew/Createnew';
import Showcase from './pages/Showcase/Showcase';
import Edit from './pages/Edit/Edit'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' Component={Showcase} />
      <Route path='/create' Component={Createnew} />
      <Route path='/edit' Component={Edit} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
