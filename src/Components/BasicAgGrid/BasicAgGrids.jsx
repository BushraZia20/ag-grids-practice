import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { SetFilterModule } from "ag-grid-enterprise";
// Register all community modules
ModuleRegistry.registerModules([AllCommunityModule, SetFilterModule]);

import "ag-grid-community/styles/ag-theme-material.css";
import "./BasicAgGrids.css";
const BasicAgGrids = () => {
  const CustomButtonComponent = () => {
    return <button onClick={() => window.alert("clicked")}>Push Me!</button>;
  };

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      // IMPORTANT FOR SCROLLING - the columns retain their min-width even if the screen shrinks
      minWidth: 150,
      editable: true,
      filter: true,
      // floatingFilter: true,
    };
  }, []);
  //   const rowSelection = useMemo(()=>{
  //     return{ mode: "multirow"}
  //   },[])

  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },

    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ]);
  const [columnDefs, setColumnDefs] = useState([
    {
      //   field: "make",
      //   //   headerName: "Make",
      //   //   valueGetter: (p) => p.data.make,
      //   //   checkboxSelection: true,
      //   //   flex: 2,

      field: "make",
      editable: true,
      // cellEditor: "agSelectCellEditor",
      // cellEditorParams: {
      //   values: ["Tesla", "Ford", "Toyota", "Mercedes", "Fiat", "Nissan"],
      // },
    },
    {
      field: "model",
      //   valueGetter: (p) => p.data.model,
      //   flex: 2,
    },
    {
      field: "price",
      valueFormatter: (p) => "£" + Math.floor(p.value).toLocaleString(),
      //   flex: 1,
    },
    {
      field: "electric",
      //  flex: 1
    },
    {
      field: "button",
      cellRenderer: CustomButtonComponent,
      // flex: 1
    },
    { field: "name" },
    { field: "age" },
    { field: "community" },
    { field: "class" },
    { field: "batallion" },
  ]);
  return (
    <div
      className="ag-theme-material-dark"
      style={{
        width: "100vw",
        height: 500,
        // not needed for scrolling
        // overflowX: "auto", // Enable horizontal scroll
        // whiteSpace: "nowrap", // Prevent wrapping
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection={"multiple"}
          defaultColDef={defaultColDef}
          //   PAGINATION
          pagination={true}
          paginationPageSize={8}
          paginationPageSizeSelector={[10, 20, 30]}

          //not required for scrolling
          // suppressHorizontalScroll={false} // Make sure scrolling is not suppressed
          // domLayout="normal" // Important for scrolling
        />
      </div>
    </div>
  );
};

export default BasicAgGrids;
