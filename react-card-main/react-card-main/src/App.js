import { useState } from "react";
import Detail from "./Detail";

function App() {
  const [value, setvalue] = useState({});
  const handle = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };

  console.log(value);

  return (
    <div>
      <h1>{}</h1>
      <div>
        <Detail />
      </div>
    </div>
  );
}

export default App;