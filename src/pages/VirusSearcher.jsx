import React, { useState } from "react";
import Card from "../components/Card";
// import Scroll from "../components/Scroll";

function App() {
  const [fetched, setFetched] = useState(false);
  const [data, setData] = useState([]);

  async function handleChange() {
    const siteurl = document.getElementById("siteurl").value;
    await fetch(
      `https://back-virussearch.herokuapp.com/report?resource=${siteurl}&allinfo=false&scan=1`
    ).then((res) => {
      if (res.status === 200) {
        res.json().then((d) => {
          setData(Object.entries(d.scans));
          setFetched(true);
        });
      } else {
        window.alert("Error");
      }
    });
  }

  return (
    <div className="">
     <div className="scroll 1 flex justify-center items-center h-screen bg-secondary">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl fonte shadowtitle-virus text-center text-primary">
            <span className="span">V</span>irus.<span className="span">S</span>earcher
          </h1>
          <div className="flex flex-col justify-center items-center w-full mt-4">
            <h4 className="text-primary fonte">Insira a URL abaixo</h4>
            <input
              id="siteurl"
              type="text"
              className="px-4 text-center outline-4 rounded-full outline-red text-primary w-4/5 outline mb-4 bg-secondary placeholder-primary"
            ></input>
            <button
              type="button"
              className="text-primary fonte bg-red rounded-full px-2 shadow-md shadow-quaternary"
              onClick={() => handleChange()}
            >
              Verificar URL
            </button>
          </div>
        </div>
      </div>
      <div className="scroll 2 flex flex-row flex-wrap justify-center text-center bg-secondary gap-6">
          {fetched ? <Card data={data}/>
           : <h1 className="text-6xl fonte text-center hidden text-primary">Carregando...</h1>}
      </div>
    </div>
  );
}

export default App;
