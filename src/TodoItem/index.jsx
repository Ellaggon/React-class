import "./TodoItem.css";
import "./TodoIcon.css";
import { FiCheckSquare } from 'react-icons/Fi';
import { RiCloseCircleFill } from 'react-icons/Ri';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
        className={`Icon-container Icon-container-check ${props.completed && "Icon-container-check-active"}`}
        onClick={props.onComplete}>
        <FiCheckSquare />
      </span>

      <p 
        className={`TodoItem-p ${props.completed && "TodoItem-p__complete"}`}>{props.text}
      </p>

      <span 
      className={` Icon-container-delete`}
      onClick={props.onDelete}>
        <RiCloseCircleFill />
      </span>
    </li>
  );
}

export { TodoItem };