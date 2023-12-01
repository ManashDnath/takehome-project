import Navbar from "../src/Component/Navbar";
import HeroSection from "./Component/Hero-Section";
import Intro from "./Component/Introduction-tab";
import Choose from "./Component/choose-tab";
import Area from "./Component/Area-tab";
import Feed from "./Component/client-feed";
import Team from "./Component/Team-tab/team";
import Faq from "./Component/FAQ";
import Subscribe from "./Component/subscribe-tab";


import "./App.css";

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Intro/>
      <Choose/>
      <Area/>
      <Feed/>
      <Team/>
      <Faq/>
      <Subscribe/>
    </>
  );
}

export default App;
