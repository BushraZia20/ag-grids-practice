import React from "react";
import { countries } from "countries-list";

const CountryList = () => {
  const countryNames = Object.values(countries).map((country) => country.name);
  return (
    <div>
      <label className="form-label">Country of Origin *</label>
      <select className="form-select">
        <option value="">Select Country</option>
        {countryNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryList;
