import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function CustomTableWithPagination({
  columns,
  rows,
  rowHeight,
  checked,
  selection,
  minHeight = "400px",
  headerColor = "white",
}: {
  columns: GridColDef<object>[];
  rows: object[];
  rowHeight: number | undefined;
  checked: boolean;
  selection: boolean;
  minHeight: string;
  headerColor: string;
}) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{ minHeight: `${minHeight}`, width: "100%", overflowX: "auto" }}
      >
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          sx={{
            "& .MuiDataGrid-root": {
              maxHeight: "100%",
            },
            ".MuiDataGrid-columnHeadersInner": {},
            ".MuiDataGrid-columnHeaders": {
              background: headerColor,
            },
            ".MuiDataGrid-footerContainer": {
              background: "white",
            },
            ".MuiDataGrid-row": {
              background: "white",
            },
            overflowX: "auto",
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection={checked}
          rowSelection={selection}
        />
      </div>
    </div>
  );
}
