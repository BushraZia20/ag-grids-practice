import React, { useEffect } from "react";
import { Country, State, City } from "country-state-city";

const TestCountryStateCity = () => {
  useEffect(() => {
    const countries = Country.getAllCountries();
    console.log("All Countries:", countries);

    const states = State.getStatesOfCountry("IN");
    console.log("States of India:", states);

    const cities = City.getCitiesOfState("IN", "OR");
    console.log("Cities of Odisha:", cities);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Testing country-state-city package</h2>
    </div>
  );
};

export default TestCountryStateCity;
