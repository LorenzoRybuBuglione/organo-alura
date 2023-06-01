import LabelInput from "../LabelInput";
import DropdownDropdown from "../Dropdown";
import "./Formulary.css";

const Formulary = () => {
  const teams = [
    'Programação',
    'Front-End',
    'Data-Science',
    'DevOps',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ]

  return (
    <section className="formulary">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <LabelInput label="Nome" placeholder="Digite o seu nome" />
        <LabelInput label="Cargo" placeholder="Digite o seu cargo" />
        <LabelInput label="Imagem" placeholder="Informe o endereço da imagem" />
        <DropdownDropdown label="Time" items={teams}/>
      </form>
    </section>
  );
};

export default Formulary;
