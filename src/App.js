import { useState } from "react";
import Banner from "./components/Banner";
import Formulary from "./components/Formulary";

function App() {
  const [workers, setWorkers] = useState([])

  const onAddWorker = (newWorker) => {
    console.log("O card foi criado => ", newWorker.name, newWorker.role, newWorker.image, newWorker.team);
    setWorkers(...workers, newWorker);
  }

  return (
    <div className="App">
      <Banner />
      <Formulary onCreateCard={newWorker => onAddWorker(newWorker)}/>
    </div>
  );
}

export default App;
