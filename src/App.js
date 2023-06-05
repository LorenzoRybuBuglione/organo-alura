import { useState } from "react";
import Banner from "./components/Banner";
import Formulary from "./components/Formulary";
import Team from "./components/Team";

function App() {
  const teams = [
    { name: "Programação", primaryColor: "#57C278", secundaryColor: "#D9F7E9" },
    { name: "Front-End", primaryColor: "#82CFFA", secundaryColor: "#E8F8FF" },
    {
      name: "Data-Science",
      primaryColor: "#A6D157",
      secundaryColor: "#F0F8E2",
    },
    { name: "DevOps", primaryColor: "#E06B69", secundaryColor: "#FDE7E8" },
    { name: "UX e Design", primaryColor: "#DB6EBF", secundaryColor: "#FAE9F5" },
    { name: "Mobile", primaryColor: "#FFBA05", secundaryColor: "#FFF5D9" },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secundaryColor: "#FFEEDF",
    },
  ];

  const [workers, setWorkers] = useState([]);

  const onAddWorker = (newWorker) => {
    console.log(
      "O card foi criado => ",
      newWorker.name,
      newWorker.role,
      newWorker.image,
      newWorker.team
    );
    setWorkers(...workers, newWorker);
  };

  return (
    <div className="App">
      <Banner />
      <Formulary
        onCreateCard={(newWorker) => onAddWorker(newWorker)}
        teams={teams.map((team) => team.name)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secundaryColor={team.secundaryColor}
        />
      ))}
    </div>
  );
}

export default App;
