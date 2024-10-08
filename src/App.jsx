import Bio from "./components/Bio";
import EducationSection from "./components/EducationSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
// import Work from "./components/Work";


function App() {
 return(
 <div className="relative h-full overflow y-auto antialiased">
  <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
  <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
    <Hero/>
    <Navbar/>
    <Projects/>
    {/* <Work/> */}
    <Bio/>
    < Skills/>
    <WorkExperience/>
    <EducationSection/>
    <ContactSection/>
    <Footer/>
  </div>
 
 </div>

 ) 
}

export default App;