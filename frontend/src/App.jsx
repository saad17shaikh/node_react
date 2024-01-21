import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("/api/profile", { withCredentials: true })
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/profile", {
          withCredentials: true,
        });
        // console.log(data)
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen bg-slate-800">
      <p className="text-xl text-gray-200 text-center ">
        Hello I am {data[0]} {data[1]}
      </p>
    </div>
  );
}

export default App;
