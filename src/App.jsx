import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import MainContent from "./components/MainContent";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <div className="min-h-screen bg-neutral-900 text-neutral-200 text-base leading-relaxed">
        <Header />
        <Hero />
        <Intro />
        <MainContent />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
