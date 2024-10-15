import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import BMICalculator from "./components/BMICalculator/BMICalculator";
import UnitConverter from "./components/UnitConverter/UnitConverter";
import Dashboard from "./components/Dashboard/Dashboard";
import Calculator from "./components/Calculator/Calculator";
import ToDoList from "./components/ToDoList/ToDoList";
import WorldClock from "./components/WorldClock/WorldClock";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/currencyconverter" element={<CurrencyConverter />} />
        <Route path="/unitconverter" element={<UnitConverter />} />
        <Route path="/bmicalculator" element={<BMICalculator />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/worldclock" element={<WorldClock />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
