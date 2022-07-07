import React from 'react'

import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { hotelColumns, hotelRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = (columns) => {
  console.log(columns, 'ieu di datagtable')
  const [data, setData] = useState(hotelRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            <div
              className="editButton"
              onClick={() => (params.row.id)}
            >
              Edit
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatable__Title">
        Add New hotel
        <Link to="/Hotels/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={hotelColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
