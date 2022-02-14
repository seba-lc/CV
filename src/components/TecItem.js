import { ListGroup } from "react-bootstrap";

const TecItem = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center px-2 py-05">
      {props.tecnology}
      <div className="d-flex">
        <div className={props.progress >= 1 ? 'progress bg-success' : 'progress'}></div>
        <div className={props.progress >= 2 ? 'progress bg-success' : 'progress'}></div>
        <div className={props.progress >= 3 ? 'progress bg-success' : 'progress'}></div>
        <div className={props.progress >= 4 ? 'progress bg-success' : 'progress'}></div>
        <div className={props.progress >= 5 ? 'progress bg-success' : 'progress'}></div>
        <div className={props.progress >= 6 ? 'progress bg-success' : 'progress'}></div>
        <div className={props.progress >= 7 ? 'progress bg-success' : 'progress'}></div>
        <div className={props.progress >= 8 ? 'progress bg-success' : 'progress'}></div>
        <div className={props.progress >= 9 ? 'progress bg-success' : 'progress'}></div>
        <div className={props.progress >= 10 ? 'progress bg-success' : 'progress'}></div>
      </div>
    </ListGroup.Item>
  );
};

export default TecItem;