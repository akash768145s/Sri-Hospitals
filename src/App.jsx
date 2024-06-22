import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Careers from "./pages/Departments/trauma-care";
import Blogs from "./pages/Blogs";

import Footer from "./components/Home/Footer";
import Navbar from "./components/Navbar/navbar";
import Departments from "./pages/Departments/Departments";
import OrthopedicAndTraumaCare from "./pages/Departments/trauma-care";
import NewBorn from "./pages/Departments/pediatric-newborn";
import Cardiology from "./pages/Departments/cardiology";
import HandSurgery from "./pages/Departments/hand-surgery";
import Dermatology from "./pages/Departments/dermatology";
import Diabetology from "./pages/Departments/diabetology";
import Ent from "./pages/Departments/ent";
import Oral from "./pages/Departments/oral";
import SportsInjury from "./pages/Departments/sports-injury";
import Gyno from "./pages/Departments/Gyno";
import Urology from "./pages/Departments/Urology";
import Radiology from "./pages/Departments/Radiology";
import Oncology from "./pages/Departments/Oncology";
import Opthalmic from "./pages/Departments/Opthalmic";
import NeuroSurgery from "./pages/Departments/Neurosurgery";
import Nephrology from "./pages/Departments/Nephrology";
import Psychiatry from "./pages/Departments/Psychiatry";
import Pulmonology from "./pages/Departments/Pulmonology";
import Vascular from "./pages/Departments/Vascular";
import General from "./pages/Departments/General";
import CoreTeam from "./pages/Core-team";
import AboutUs from "./pages/About-us";
import BlogDetails from "./pages/Blogs-details";
import CreativesUploadForm from "./pages/CreativesUpload";
import NewsDetail from "./pages/NewDetails";
import NewsList from "./pages/NewsList";
import UploadVideo from "./pages/uploadVideo";
import ContactSection from "./components/Home/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contactus" element={<ContactSection />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/core-team" element={<CoreTeam />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route
          path="/departments/trauma-care"
          element={<OrthopedicAndTraumaCare />}
        />
        <Route path="/departments/pediatric-newborn" element={<NewBorn />} />
        <Route path="/departments/cardiology" element={<Cardiology />} />
        <Route path="/departments/hand-surgery" element={<HandSurgery />} />
        <Route path="/departments/dermatology" element={<Dermatology />} />
        <Route path="/departments/diabetology" element={<Diabetology />} />
        <Route path="/departments/ent" element={<Ent />} />
        <Route path="/departments/oral" element={<Oral />} />
        <Route path="/departments/sports-injury" element={<SportsInjury />} />
        <Route path="/departments/obstetrics-gynaecology" element={<Gyno />} />
        <Route path="/departments/urology" element={<Urology />} />
        <Route path="/departments/radiology" element={<Radiology />} />
        <Route path="/departments/oncology" element={<Oncology />} />
        <Route path="/departments/ophthalmic-surgery" element={<Opthalmic />} />
        <Route path="/departments/neuroSurgery" element={<NeuroSurgery />} />
        <Route path="/departments/nephrology" element={<Nephrology />} />
        <Route path="/departments/psychiatry" element={<Psychiatry />} />
        <Route path="/departments/pulmonology" element={<Pulmonology />} />
        <Route
          path="/departments/vascular-endovascular-surgery"
          element={<Vascular />}
        />
        <Route
          path="/departments/general-laparoscopic-surgery"
          element={<General />}
        />
        <Route path="/departments/laparoscopic-surgery" element={<General />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/admin" element={<CreativesUploadForm />} />
        <Route path="/footers" element={<Footer />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/news" element={<NewsList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
