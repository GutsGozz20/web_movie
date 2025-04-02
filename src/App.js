import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import ManageMovies from '../src/components/ManageMovies';
import WorkShedule from '../src/components/WorkShedule';
import UpdateWorkSchedule from '../src/components/UpdateWorkSchedule';
import EmployeeList from '../src/components/Employee';
import WorkScheduleEmployee from '../src/components/WorkSheduleEmployee';
import UpdateWorkScheduleEmployee from '../src/components/UpdateWorkSheduleEmployee';

function App() {
  return (
    <Router> {/* Đặt Router ở ngoài cùng */}
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/manageMovies" element={<ManageMovies />} />
          <Route path="/workShedule" element={<WorkShedule />} />
          <Route path="/update/:id" element={<UpdateWorkSchedule />} />
          <Route path="/workSheduleEmployee" element={<WorkScheduleEmployee />} />
          <Route path="//update-work-schedule/:id" element={<UpdateWorkScheduleEmployee />} />
          <Route path="/employee" element={<EmployeeList />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
