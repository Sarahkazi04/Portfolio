import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import MouseGlow from "../components/MouseGlow";
import AnimatedBackground from "../components/AnimatedBackground";

function Layout({ children }) {
  return (
    <>
      
      <ScrollProgress />
      <AnimatedBackground />
      <MouseGlow />
      <Navbar />

      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;