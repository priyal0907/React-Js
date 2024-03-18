import { useEffect, useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Apicrude from "./Apicrude";


function App() {
  const [data, setdata] = useState();

  const title = useRef();
  const author = useRef();

  useEffect(() => {
    axios.get("  http://localhost:3000/posts").then((res) => {
      // console.log(res.data);
      setdata(res.data || []);
    });
  }, []);

  function handlesubmit() {
    const maindata = {
      title: title.current.value,
      author: author.current.value,
    };

    // console.log(data);

    axios.post(" http://localhost:3001/posts", maindata).then((res) => {
      console.log(res.data);

      setdata([...data, res.data]);
    });
  }

  console.log(data, "data");
  return (
    <div>
      <Apicrude />
    </div>
  );
}

export default App;