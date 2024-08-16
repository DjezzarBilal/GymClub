import "./App.css";
import Footer from "./assets/components/footer/footer";
import Hero from "./assets/components/hero/hero";
import Joinus from "./assets/components/joinus/joinus";
import Plans from "./assets/components/plans/plans";
import Programs from "./assets/components/programs/programs";
import Reason from "./assets/components/reasons/reason";
import Testomonial from "./assets/components/testomnial/testomonial";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans></Plans>
      <Testomonial></Testomonial>
      <Joinus />
      <Footer />
    </div>
  );
}

export default App;
