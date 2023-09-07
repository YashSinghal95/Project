import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import HomePage  from './components/homepage';
import PatientRegester from './components/patientRegestration/patientRegester';
import DoctorRegester from './components/doctorRegestration/doctorRegester';
import DoctorLogin from './components/doctorLogin/doctorLogin';
import AdminLogin from './components/adminLogin/adminLogin';
import PatientLogin from './components/patientLogin/patientLogin';
import Header from './components/header';
function App() {
  return (
    <Router>
      
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/patientRegester' element={<PatientRegester></PatientRegester>}></Route>
        <Route path='/doctorRegester' element={<DoctorRegester></DoctorRegester>}></Route>
        <Route path='/doctorLogin' element={<DoctorLogin></DoctorLogin>}></Route>
        <Route path='/adminLogin' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/patientLogin' element={<PatientLogin></PatientLogin>}></Route>


      </Routes>
    </div>
    </Router>
  );
}

export default App;
