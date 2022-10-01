import "./App.css";
import React from "react";
import Form from "../Form/Form";
import Table from "../Table/Table";
import Paginator from "../Paginator/Paginator";

function App() {
  return (
    <div className="App">
      <Form />
      <Table />
      <Paginator />
    </div>
  );
}
export default React.memo(App);
