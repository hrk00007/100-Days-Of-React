import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Employees from './components/Employees/Employees';
import EmployeesDetails from './components/Employees/EmployeesDetails';
import About from './components/About/About';
import Stock from './components/Stock/Stock';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/employees/:id' element={<EmployeesDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/stocks' element={<Stock />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
