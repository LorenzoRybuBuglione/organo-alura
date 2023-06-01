import { useState } from "react";
import LabelInput from "../LabelInput";
import DropdownDropdown from "../Dropdown";
import Button from "../Button";
import "./Formulary.css";

const Formulary = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("Programação");

  const teams = [
    "Programação",
    "Front-End",
    "Data-Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const onCreate = (event) => {
    event.preventDefault();
    console.log("O card foi criado => ", name, role, image, team);
  };

  return (
    <section className="formulary">
      <form onSubmit={onCreate}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <LabelInput
          value={name}
          onTyping={(value) => setName(value)}
          label="Nome"
          placeholder="Digite o seu nome"
          required
        />
        <LabelInput
          valor={role}
          onTyping={(value) => setRole(value)}
          label="Cargo"
          placeholder="Digite o seu cargo"
          required
        />
        <LabelInput
          value={image}
          onTyping={(value) => setImage(value)}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <DropdownDropdown
          value={team}
          onChange={(value) => setTeam(value)}
          label="Time"
          items={teams}
          required
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Formulary;
