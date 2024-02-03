import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
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
    <>
      <div className="h-screen flex items-center justify-center bg-slate-800">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-xl text-gray-200 text-center "
        >
          <div className="flex flex-col gap-5 text-xl">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="w-16 h-16 rounded-full  bg-red-300"
            ></motion.div>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="w-16 h-16 rounded-full  bg-red-300"
            ></motion.div>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="w-16 h-16 rounded-full  bg-red-300"
            ></motion.div>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="w-16 h-16 rounded-full  bg-red-300"
            ></motion.div>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="w-16 h-16 rounded-full  bg-red-300"
            ></motion.div>
            <hr />
            <motion.div
              whileHover={{ scale: 1, borderRadius: 50 }}
              transition={{ duration: 1 }}
              className="w-24 h-24 bg-green-400"
            />
          </div>
        </motion.div>
      </div>
      <motion.div className=" h-screen bg-green-400">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          natus id nisi aliquam aliquid quas atque perferendis quisquam dicta
          excepturi dignissimos reprehenderit minus, quod porro dolorum unde
          iste distinctio. Commodi modi, debitis placeat reprehenderit amet
          magnam quae explicabo quam quod quia sapiente excepturi. Illum,
          corrupti quia esse architecto quasi inventore.
        </motion.p>
      </motion.div>
    </>
  );
}

export default App;
