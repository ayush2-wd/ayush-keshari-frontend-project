import "../styles/projects.css";
import ProjectList from "./ProjectList";
import ProjectList1 from "./ProjectList1";

const Projects = () => {
  return (
    <section className="projectSec">
      <div className="projSec1">
        <ProjectList />
      </div>

      <div className="projSec2">
        <div className="projSec2First">
          <div className="first">
            {" "}
            <div className="ellipse"></div>
            Featured Works
          </div>
          <div className="second">
            Take a look at <br /> our projects
          </div>
        </div>

        <div className="projSec2Second">
          <ProjectList1 />
        </div>
      </div>
    </section>
  );
};

export default Projects;