import { AddOutlined, CloseOutlined } from "@mui/icons-material";
import { Checkbox } from "@mui/joy";
import { Box, IconButton } from "@mui/material";
import { ChangeEvent, useState } from "react";

const DepartmentData = () => {
  // State to keep track of the checked status of the checkboxes
  const [checkedDep1, setCheckedDep1] = useState<boolean[]>([false, false]);
  const [checkedDep2, setCheckedDep2] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  //   State to keep track of the collapsed status of the checkboxes
  const [collapsedDeps, setCollapsedDeps] = useState<boolean[]>([false, false]);

  //   Function to handle the collapse of the checkboxes
  const handleCollapse = (index: number) => {
    const newCollapsed = [...collapsedDeps];
    newCollapsed[index] = !newCollapsed[index];
    setCollapsedDeps(newCollapsed);
  };

  //   Functions to handle the change of the checkboxes for department 1 "customer_service"
  const handleDep1Change =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const newChecked = [...checkedDep1];
      newChecked[index] = event.target.checked;
      setCheckedDep1(newChecked);
    };

  const handleDep1AllChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedDep1([event.target.checked, event.target.checked]);
  };

  //  Functions to handle the change of the checkboxes for department 2 "design"
  const handleDep2Change =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const newChecked = [...checkedDep2];
      newChecked[index] = event.target.checked;
      setCheckedDep2(newChecked);
    };

  const handleDep2AllChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedDep2([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  //   Functions to render the children checkboxes for the departments
  const renderDep1Children = () => (
    <Box
      sx={{ display: "flex", flexDirection: "column", ml: 6, gap: 1, mt: 1 }}
    >
      <Checkbox
        checked={checkedDep1[0]}
        onChange={handleDep1Change(0)}
        label={"support"}
      />
      <Checkbox
        checked={checkedDep1[1]}
        onChange={handleDep1Change(1)}
        label={"customer_success"}
      />
    </Box>
  );

  //   Function to render the children checkboxes for the departments
  const renderDep2Children = () => (
    <Box
      sx={{ display: "flex", flexDirection: "column", ml: 6, gap: 1, mt: 1 }}
    >
      <Checkbox
        checked={checkedDep2[0]}
        onChange={handleDep2Change(0)}
        label={"graphic_design"}
      />
      <Checkbox
        checked={checkedDep2[1]}
        onChange={handleDep2Change(1)}
        label={"product_design"}
      />
      <Checkbox
        checked={checkedDep2[2]}
        onChange={handleDep2Change(2)}
        label={"web_design"}
      />
    </Box>
  );

  //   Main return statement
  return (
    <div className="p-[5vw] space-y-8 flex flex-col justify-start items-start">
      <h1 className="text-2xl font-bold">Select Departments</h1>
      {/* ------------------------------------Department 1------------------------------------ */}
      <div>
        <div className="flex flex-row justify-start items-center space-x-2">
          <IconButton onClick={() => handleCollapse(0)}>
            {!collapsedDeps[0] ? <AddOutlined /> : <CloseOutlined />}
          </IconButton>
          <Checkbox
            label="customer_service"
            checked={checkedDep1.every(Boolean)}
            indeterminate={
              checkedDep1.some(Boolean) && !checkedDep1.every(Boolean)
            }
            onChange={handleDep1AllChange}
          />
        </div>
        {collapsedDeps[0] && renderDep1Children()}
      </div>
      {/* ------------------------------------Department 2------------------------------------ */}
      <div>
        <div className="flex flex-row justify-start items-center space-x-2">
          <IconButton onClick={() => handleCollapse(1)}>
            {!collapsedDeps[1] ? <AddOutlined /> : <CloseOutlined />}
          </IconButton>
          <Checkbox
            label="design"
            checked={checkedDep2.every(Boolean)}
            indeterminate={
              checkedDep2.some(Boolean) && !checkedDep2.every(Boolean)
            }
            onChange={handleDep2AllChange}
          />
        </div>
        {collapsedDeps[1] && renderDep2Children()}
      </div>
    </div>
  );
};

export default DepartmentData;
