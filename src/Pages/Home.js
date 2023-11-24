import Hero from "../Components/Hero";
import Projects from "../Components/Projects";

const Home = () => {
  return (
    <section>
      <div id="overlay"></div>
      <div id="blob"></div>
      <Hero />
      <Projects />
    </section>
  );
};

export default Home;
