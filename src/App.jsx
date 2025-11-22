// src/App.jsx
import React from "react";
import BasicGrid from "./Components/BasicAgGrid/BasicAgGrids";
import GridExample from "./Components/AG_Grids/GridExample";
import CountryList from "./Components/CountryList";
import TestCountryStateCity from "./Components/CountryStateCity";
import MarketingPage from "./Components/MarketingPage";

function App() {
  return (
    <div>
      <h1>My ag-Grid Example</h1>
      {/* <BasicGrid /> */}
      {/* <GridExample /> */}
      {/* <CountryList /> */}
      {/* <TestCountryStateCity /> */}
      <MarketingPage />
    </div>
  );
}

export default App;
