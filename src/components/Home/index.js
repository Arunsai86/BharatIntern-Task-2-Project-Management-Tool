import { Component } from "react";
import ProjectItem from "../ProjectItem";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

class App extends Component {
  state = {
    title: "",
    description: "",
    projectsList: [],
    displayErrMsg: false,
  };

  submitForm = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    if (title === "" || description === "") {
      this.setState({
        displayErrMsg: true,
      });
    } else {
      const userDetails = {
        id: uuidv4(),
        title,
        description,
      };
      this.setState((prevState) => ({
        projectsList: [...prevState.projectsList, userDetails],
        title: "",
        description: "",
        displayErrMsg: false,
      }));
    }
  };

  changeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  changeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  deleteProject = (id) => {
    const { projectsList } = this.state;
    const filterData = projectsList.filter((eachItem) => eachItem.id !== id);
    this.setState({
      projectsList: filterData,
    });
  };

  render() {
    const { title, description, projectsList, displayErrMsg } = this.state;
    // console.log(projectsList);
    return (
      <div className="app-container">
        <nav className="nav-container">
          <h1 className="title">Task Management Tool</h1>
        </nav>
        <h1 className="create-task-heading">Create Project</h1>
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-label-container">
            <label htmlFor="title">Title*</label>
            <input
              id="title"
              type="text"
              placeholder="Project Title"
              onChange={this.changeTitle}
              value={title}
            />
          </div>
          <div className="input-label-container">
            <label htmlFor="description">Description*</label>
            <textarea
              id="description"
              type="text"
              placeholder="Project Description"
              rows="6"
              onChange={this.changeDescription}
              value={description}
            />
          </div>
          <button type="submit" className="save-btn">
            Save
          </button>
          {displayErrMsg && (
            <p className="error-msg">*Please enter something</p>
          )}
        </form>
        <div className="projects-details-section">
          <h1 className="create-task-heading">Projects</h1>
          <ul className="projects-container">
            {projectsList.map((eachProjectItem) => (
              <ProjectItem
                key={eachProjectItem.id}
                projectItemDetails={eachProjectItem}
                deleteProject={this.deleteProject}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
