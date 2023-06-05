import "./WorkerCard.css";

const WorkerCard = (props) => {
  return (
    <div className="worker">
      <div className="header">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="footer">
        <h4>{props.name}</h4>
        <h5>{props.role}</h5>
      </div>
    </div>
  );
};

export default WorkerCard;
