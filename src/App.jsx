import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer/Footer";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import BMICalculator from "./components/BMICalculator/BMICalculator";
import UnitConverter from "./components/UnitConverter/UnitConverter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={Dashboard} />
        <Route path="/calculator" exact component={Calculator} />
        <Route path="/currencyConverter" exact component={CurrencyConverter} />
        <Route path="/unitConverter" exact component={UnitConverter} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
