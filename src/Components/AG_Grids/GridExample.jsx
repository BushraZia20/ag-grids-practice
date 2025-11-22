import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";

// 1-First we need to setup the modules which will give us all the features.
import {
  AllCommunityModule,
  ModuleRegistry,
  themeMaterial,
} from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

import "./GridExample.css";
import "ag-grid-community/styles/ag-theme-material.css";

const GridExample = () => {
  //2- (optional- incase we need modification) Set up a custom aggrid theme
  const myTheme = themeMaterial.withParams({
    name: "ag-theme-my-dark", // custom theme name
    spacing: 12,
    accentColor: "red",
    backgroundColor: "#121212", // Main background
    textColor: "#ffffff", // Text color
    headerBackgroundColor: "#1e1e1e", // Header background
    headerTextColor: "#ffffff", // Header text
    rowHoverColor: "#2a2a2a", // Row hover

    // Add these to fix borders and grid lines
    borderColor: "#2a2a2a", // Grid line color
    rowBorderColor: "#2a2a2a", // Horizontal row borders
    headerColumnBorderColor: "white", // Header separator color
    cellHorizontalBorder: "#2a2a2a", // Cell border inside grid
    rangeSelectionBorderColor: "red", // Border when selecting cells
    checkboxBorderColor: "#888", // Checkbox border color
  });

  // 3- set up row data and column data
  const [rowData, setRowData] = useState(() => {
    const rowData = [];
    for (let i = 0; i < 10; i++) {
      rowData.push({
        make: "Tesla",
        model: "Model Y",
        price: 61000 + i * 1000,
        electric: true,
      });
      rowData.push({
        make: "Ford",
        model: "F-Series",
        price: 33850 + i * 1000,
        electric: false,
      });
      rowData.push({
        make: "Toyota",
        model: "Corolla",
        price: 29600 + i * 1000,
        electric: false,
      });
      rowData.push({
        make: "Mercedes",
        model: "EQA",
        price: 48890 + i * 1000,
        electric: true,
      });
      rowData.push({
        make: "Fiat",
        model: "500",
        price: 15774 + i * 1000,
        electric: false,
      });
      rowData.push({
        make: "Nissan",
        model: "Juke",
        price: 20675 + i * 1000,
        electric: false,
      });
    }
    return rowData;
  });

  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 159,
      editable: true,
      filter: true,
      // floatingFilter: true,
    };
  }, []);
  return (
    <div
      //   className="ag-theme-material-dark"
      style={{ width: "100vw", height: 500 }}
    >
      <div style={{ height: "100%", width: "100%" }}>
        <AgGridReact
          theme={myTheme}
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[5, 10, 15]}
        />
      </div>
    </div>
  );
};

export default GridExample;
