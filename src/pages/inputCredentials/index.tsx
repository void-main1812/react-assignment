import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputCredential = () => {
  const navigate = useNavigate();
  const arr: any[] = [];

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<number | undefined>();
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (name: string, phone: number|undefined, email: string) => {
    if (name && email !== "" && phone !== undefined) {
      arr.push(name, phone, email);
    }
    if (arr.length === 3) {
      return navigate("/datagrid");
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="h-[100vh] w-[100vw]  bg-gray-100 flex justify-center items-center ">
      <div className="p-[2.5vw] bg-white shadow-2xl rounded-2xl flex flex-col justify-center items-start space-y-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Enter Credentials</h1>
          <p className="text-gray-500">
            Please enter your credentials to continue
          </p>
        </div>
        <form
          className="space-y-4"
          onSubmit={() => handleSubmit(name, phone, email)}
        >
          <div className="flex flex-col space-y-2 w-[25vw]">
            <TextField
              variant="filled"
              placeholder="John Doe"
              color="info"
              label="Enter your Name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="filled"
              placeholder="111 222 3333"
              color="info"
              label="Enter your Phone No."
              type="number"
              required
              onChange={(e) => setPhone(Number(e.target.value))}
            />
            <TextField
              variant="filled"
              placeholder="JohnDoe@host.com"
              color="info"
              label="Enter your Email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Button className="w-full" variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputCredential;
