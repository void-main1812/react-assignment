import axios from "axios"

interface DataType {
  id: number;
  userId: number;
  title: string;
}

export const Data = async() => {
    const response = await axios.get<DataType[]>("https://jsonplaceholder.typicode.com/posts")
    return response.data
}