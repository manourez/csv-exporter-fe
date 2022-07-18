import { useState } from "react";
import { Uploadform } from "./components/upload-form";
import { TableData } from "./components/table-data";
import './App.css'

function App() {
  const [data, setData] = useState([])

  const onViewClicked = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/files')
      const res = await response.json();
      setData(res)
  } catch {}
  }

  return (
    <div className="App">
      <button onClick={onViewClicked} className="view">View file content</button>
      <Uploadform />
      {data.length !== 0 ? 
        <TableData data={data} />
      :
        null
      }
    </div>
  );
}

export default App;
