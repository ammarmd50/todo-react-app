import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Home/Navbar";
import Hero from "../../components/Home/Hero";
import Features from "../../components/Home/Features";
import HowItWorks from "../../components/Home/HowItWorks";
import CTA from "../../components/Home/CTA";
import Footer from "../../components/Home/Footer";
import "../../components/Home/StyleHome.css";

// import Navbar from "../../components/Home/Navbar";
// import Features from "../../components/Home/Features";
// import HowItWorks from "../../components/Home/HowItWorks";
// import CTA from "../../components/Home/CTA";
// import Footer from "../../components/Home/Footer";
// import Hero from "../../components/Home/Hero";

// import "./home.css";

function Home({ auth, setAuth }) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    auth ? navigate("/todos") : navigate("/signup");
  };

  return (
    <>
      <Navbar auth={auth} setAuth={setAuth} />

      <main className="home-container">
        <Hero onGetStarted={handleGetStarted} />
        <Features />
        <HowItWorks />
        <CTA onGetStarted={handleGetStarted} />
      </main>

      <Footer />
    </>
  );
}

export default Home;
