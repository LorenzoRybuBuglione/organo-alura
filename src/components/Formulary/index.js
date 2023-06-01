import LabelInput from "../LabelInput";
import DropdownDropdown from "../Dropdown";
import Button from "../Button";
import "./Formulary.css";

const Formulary = () => {
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
    console.log("O card foi criado");
  };

  return (
    <section className="formulary">
      <form onSubmit={onCreate}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <LabelInput label="Nome" placeholder="Digite o seu nome" required />
        <LabelInput label="Cargo" placeholder="Digite o seu cargo" required />
        <LabelInput label="Imagem" placeholder="Informe o endereço da imagem" />
        <DropdownDropdown label="Time" items={teams} required />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Formulary;
