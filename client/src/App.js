// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from './components/Register/Register'; 
// import Login from './components/Login/Login';
// import Home from './components/Home/Home'; 
// import Contact from './components/Contact/Contact';
// import Navbar from './components/Nabvar/Navbar';
// import Footer from './components/Footer/Footer';
// import Dashboard from './components/Dashboard/Dashboard';
// // import LearnMorePage from './components/LearnMorePage/LearnMorePage';
// //import VolunteeringForm from './components/VolunteeringForm/VolunteeringForm';
// import DonationForm from './components/DonationForm/DonationForm';
// import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage';
// import AdminLogin from './components/AdminLogin/AdminLogin';
// import './App.css'; // Import the CSS file
// import AdminDashboard from './components/AdminDashboard/AdminDashboard';

// function App() {
//   return (
//       <Router>
//           <div className="d-flex flex-column min-vh-100"> {/* Updated container */}
//               <Navbar />
//               <div className="flex-grow-1"> {/* Main content area */}
//                   <Routes>
//                       <Route path="/" element={<Home />} />
//                       <Route path="/register" element={<Register />} />
//                       <Route path="/login" element={<Login />} />
//                       <Route path="/admin-login" element={<AdminLogin />} />
//                       <Route path="/admin-dasboard" element={<AdminDashboard />} />
//                       <Route path="/contact" element={<Contact />} />
//                       <Route path="/dashboard" element={<Dashboard />} />
//                       {/* <Route path="/learn-more/:id" element={<LearnMorePage />} /> */}
//                       {/* <Route path="/volunteering-form" element={<VolunteeringForm/>} /> */}
//                       <Route path="/donation-form" element={<DonationForm />} />
//                       <Route path="/confirmation" element={<ConfirmationPage />} />
                      
//                       {/* Add other routes as needed */}
//                   </Routes>
//               </div>
//               <Footer />
//           </div>
//       </Router>
//   );
// }

// export default App;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register'; 
import Login from './components/Login/Login';
import Home from './components/Home/Home'; 
import Contact from './components/Contact/Contact';
import Navbar from './components/Nabvar/Navbar';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import DonationForm from './components/DonationForm/DonationForm';
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage';
import AdminLogin from './components/AdminLogin/AdminLogin'; // Import AdminLogin component
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import JobPostingForm from './components/JobPostingForm/JobPostingForm';
import JobPostings from './components/JobPostings/JobPostings';
import DonationPostings from './components/ProjectPostings/ProjectPostings';
import './App.css'; // Import the CSS file

function App() {
  return (
      <Router>
          <div className="d-flex flex-column min-vh-100"> {/* Updated container */}
              <Navbar />
              <div className="flex-grow-1"> {/* Main content area */}
              <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/admin-login" element={<AdminLogin />} /> {/* Route for AdminLogin */}
                      <Route path="/AdminDashboard" element={<AdminDashboard />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/job-form" element={<JobPostingForm/>} />
                      <Route path="/donation-form" element={<DonationForm />} />
                      <Route path="/Job-form" element={<JobPostingForm />} />
                      <Route path="/confirmation" element={<ConfirmationPage />} />
                      <Route path="/job-postings" element={<JobPostings />} />
                      <Route path="/donation-postings" element={<DonationPostings />} />
                      {/* Add other routes as needed */}
                    </Routes> 
              </div>
              <Footer />
              
          </div>
      </Router>
          
      
  );
}

export default App;

