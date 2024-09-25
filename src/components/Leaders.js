import "../styles/leaders.css";
import LeaderList from "./LeaderList";
const Leaders = () => {
  return (
    <section className="leaderSecMain">
      <div className="leaderSecText">
        <div className="leaderSecText1">
          {" "}
          <div className="ellipse"></div>
          Our leader
        </div>
        <div className="leaderSecText2">
          Each product is crafted with passion and <br /> dedication. Meet our
          leader !
        </div>
      </div>
      <div className="leaderSecList">
        <div className="leaderSecList1">
          <div className="secListOne"></div>
          <LeaderList bgc={"#4034eb"} color={"#584EE4"} name={"Cody Fisher"} position={"CEO Founder"}/>
          <div className="secListTwo"></div>
        </div>
        <div className="leaderSecList2">
          <div className="secListThree"></div>
          <LeaderList bgc={"#111111"} color={"#151515"} name={"Kristin Watson"} position={"Manager"} />
          <div className="secListFour"></div>
        </div>
        <div className="leaderSecList3">
          <div className="secListFive"></div>
          <LeaderList bgc={"#111111"} color={"#151515"} name={"Leslie Alexander"} position={"Design Leader"}/>
          <div className="secListSix"></div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;