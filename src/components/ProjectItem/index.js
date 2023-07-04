import { AiOutlineDelete } from "react-icons/ai";

import "./index.css";

const ProjectItem = (props) => {
  const { projectItemDetails, deleteProject } = props;
  const { id, title, description } = projectItemDetails;
  const onClickDeleteBtn = () => {
    deleteProject(id);
  };
  return (
    <li>
      <div className="display-details-container">
        <h1 className="title-display">{title}</h1>
        <p className="description-display">{description}</p>
      </div>
      <div className="button-container">
        <button className="delete-button" onClick={onClickDeleteBtn}>
          <AiOutlineDelete className="delete-icon-size" />
        </button>
      </div>
    </li>
  );
};
export default ProjectItem;
