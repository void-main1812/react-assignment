import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "react-query";
import { Data } from "../api/tableData";

const DataTable = () => {
  // Fetch data from the API
  const { data, isLoading, error } = useQuery("fetchData", Data,);

  // Handle the loading and error states
  if (isLoading) return (<div className="h-full w-full flex justify-center items-center" >Loading...</div>);
  if (error) return <div>An error has occurred</div>;

  // Define the columns and rows for the DataGrid
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "userId", headerName: "User ID", width: 150 },
    { field: "title", headerName: "Title", width: 500 },

  ]

  // Map the data to the rows
  const rows = data!.map((item) => ({
    id: item.id,
    userId: item.userId,
    title: item.title,
  }))

  return (
    <div className="h-[100vh] flex flex-col space-y-2 p-8" >
      <h1 className="text-2xl font-bold" >Data Table</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[15]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
