import DataTable from "../../components/DataGrid";
import DepartmentData from "../../components/DepartmentData";

const DataShowCase = () => {
  return (
    <div className="flex flex-row" >
      <div className="w-1/4 h-[100vh] bg-white border-r-2" >
        <DepartmentData/>
      </div>
      <div className="h-[100vh] w-3/4" >
        <DataTable />
      </div>
    </div>
  );
};

export default DataShowCase;
