import "../styles/projectList.css"
import robo from "../assests/Ellipse 47 (1).png"

const ProjectList1 = () => {
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
          <div className="text2">UI/UX</div>
          <div className="text1">Illustration</div>
        </div>
        <div className="proListTextSecond">Poppin App Design</div>
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
        <div className="text3">Branding</div>
          <div className="text2">UI/UX</div>
        </div>
        <div className="proListTextSecond">Helvatica Branding</div>
      </div>
      
    </div>
    </>
  );
};

export default ProjectList1;