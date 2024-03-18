import React, { useState } from "react";
import { data } from "./Data";
import { useEffect } from "react";

const Detail = () => {
  console.log(data);

  const [result, setresult] = useState([]);
  const [val, setval] = useState({});

  console.log(result, "result");

  const handle = (e) => {
    setval({ ...val, [e.target.name]: e.target.value });
  };

  const handlesubmit = () => {
    console.log(val, "val");

    setresult([...result, val]);
  };

  useEffect(() => {
    setresult(data);
  }, []);

  return (
    <div>
      <input type="text" name="author" onChange={handle} />
      <input type="text" name="title" onChange={handle} />
      <button onClick={handlesubmit}>Add</button>
      <div>
        {result?.map((val, ind) => {
          return (
            <>
              <h3>{val.author}</h3>
              <h3>{val.title}</h3>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;