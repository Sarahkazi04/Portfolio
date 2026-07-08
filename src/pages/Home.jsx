import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Certifications />
      <Contact />
    </Layout>
  );
}

export default Home;