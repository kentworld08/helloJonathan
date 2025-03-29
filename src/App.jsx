import "./App.css";
import Navbar from "./components/header";
import Navigation from "./components/navigation";
import { Main } from "./components/sections";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Featured } from "./components/featured";
import { Services } from "./components/services";
import { Footer } from "./components/footer";
import { Pages } from "./page";
import { BgColor } from "./components/utility/bgColor";

function App() {
  return (
    <Pages>
      <Navbar>
        <Navigation />
      </Navbar>
      <Main>
        <Hero />
        <About />
        <Featured />
        <Services />
      </Main>
      <Footer />
      <BgColor />
    </Pages>
  );
}

export default App;
