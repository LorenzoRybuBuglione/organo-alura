import Banner from "./components/Banner";
import LabelInput from "./components/LabelInput";

function App() {
  return (
    <div className="App">
      <Banner />
      <LabelInput label="Nome"/>
      <LabelInput label="Cargo"/>
      <LabelInput label="Imagem"/>
    </div>
  );
}

export default App;
