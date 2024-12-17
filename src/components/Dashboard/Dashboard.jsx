import React from "react";
import styles from "./Dashboard.module.css"; // Assuming you are still using module.css for styling
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const tools = [
    {
      name: "Calculator",
      image: "/Calculator.png",
      description:
        "From simple sums to advanced equations—calculation made easy!",
    },
    {
      name: "Notes",
      image: "/Notes.png",
      description: "Quickly jot down your thoughts and ideas",
    },
    {
      name: "Currency Converter",
      image: "/CurrencyConverter.png",
      description:
        "Quickly and accurately convert your favorite currencies anytime, anywhere.",
    },
    {
      name: "Unit Converter",
      image: "/UnitConverter.png",
      description:
        "Need a conversion? Get accurate results for any unit type at the speed of light.",
    },
    {
      name: "BMI Calculator",
      image: "/BMICalculator.png",
      description: "Calculate your BMI and stay on top of your health goals.",
    },
    {
      name: "Calendar",
      image: "/Calendar.png",
      description:
        "From birthdays to meetings—never miss an important date again.",
    },
    {
      name: "World Clock",
      image: "/WorldClock.png",
      description:
        "Know the time in any city with just a glance, no matter where you are.",
    },
    {
      name: "Weather",
      image: "/WeatherForecast.png",
      description:
        "Your go-to source for weather updates—rain or shine, we’ve got you covered.",
    },
  ];

  const handleCardClick = (toolName) => {
    navigate(`/${toolName}`);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {tools.map((tool, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div
              className={`card ${styles.card} text-bg-dark`}
              onClick={() => handleCardClick(tool.name)}
            >
              <img src={tool.image} className="card-img-top" alt={tool.name} />
              <div className={`card-text ${styles.cardText}`}>
                {tool.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
` `;
