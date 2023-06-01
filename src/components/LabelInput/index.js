import "./LabelInput.css";

const LabelInput = (props) => {
  console.log(props.placeholder);
  return (
    <div className="label-input">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default LabelInput;
