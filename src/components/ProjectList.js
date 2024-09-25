import "../styles/projectList.css"
import robo from "../assests/Ellipse 47 (1).png"

const ProjectList = () => {
  return (
    <>
    <div className="projectListMain">
      <div className="proListMainImg">
        <img
          src={robo}
          alt=""
        />
      </div>
      <div className="proListText">
        <div className="proListTextFirst">
          <div className="text1">Development</div>
          <div className="text2">UI/UX</div>
          <div className="text3">Illustration</div>
        </div>
        <div className="proListTextSecond">Roboto Landing page</div>
      </div>
      
    </div>
    <div className="projectListMain">
      <div className="proListMainImg">
        <img
          src={robo}
          alt=""
        />
      </div>
      <div className="proListText">
        <div className="proListTextFirst">
          <div className="text1">Development</div>
          <div className="text2">UI/UX</div>
          <div className="text3">Illustration</div>
        </div>
        <div className="proListTextSecond">Groteck Website</div>
      </div>
      
    </div>
    </>
  );
};

export default ProjectList;